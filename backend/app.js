import { Hono } from 'hono'
import { createServerClient } from '@supabase/ssr'
import { getCookie, setCookie } from 'hono/cookie'
import { ethers } from 'ethers'

const app = new Hono()

// Initialize Supabase client server-side with cookie session
function createSupabaseClient(c) {
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () =>
          Object.entries(getCookie(c)).map(([name, value]) => ({ name, value })),
        setAll: (cookies) => {
          cookies.forEach(({ name, value, options }) => {
            setCookie(c, name, value, {
              ...options,
              sameSite: options.sameSite === true ? 'strict' : options.sameSite || undefined,
            })
          })
        },
      },
    }
  )
}

// Initialize ethers provider and contract for blockchain verification
const provider = new ethers.providers.JsonRpcProvider(process.env.ETH_RPC_URL)
const votingContractAddress = process.env.VOTING_CONTRACT_ADDRESS
const votingAbi = [
  "event VoteCast(address indexed voter, uint256 kandidatId)"
]
const contract = new ethers.Contract(votingContractAddress, votingAbi, provider)

// Verify blockchain transaction function
async function verifyVoteTransaction(txHash, expectedVoter, expectedKandidatId) {
  const receipt = await provider.getTransactionReceipt(txHash)
  if (!receipt || receipt.status !== 1) throw new Error('Transaction failed or not confirmed')

  const iface = new ethers.utils.Interface(votingAbi)
  const logs = receipt.logs.map(log => {
    try {
      return iface.parseLog(log)
    } catch {
      return null
    }
  }).filter(Boolean)

  const voteEvent = logs.find(e =>
    e.name === 'VoteCast' &&
    e.args.voter.toLowerCase() === expectedVoter.toLowerCase() &&
    e.args.kandidatId.toNumber() === expectedKandidatId
  )

  if (!voteEvent) throw new Error('VoteCast event not found or data mismatch')

  return true
}

// Admin register endpoint
app.post('/admin/register', async (c) => {
  const { email, password, full_name } = await c.req.json()
  const supabase = createSupabaseClient(c)

  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) return c.json({ error: error.message }, 400)

  await supabase.from('profiles').insert({
    id: data.user.id,
    full_name,
    role: 'admin'
  })

  return c.json({ message: 'Admin registered successfully. Please check your email for confirmation.' })
})

// Admin login endpoint
app.post('/admin/login', async (c) => {
  const { email, password } = await c.req.json()
  const supabase = createSupabaseClient(c)

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return c.json({ error: error.message }, 400)

  return c.json({ user: data.user })
})

// Add voter endpoint (admin only)
app.post('/voters', async (c) => {
  const supabase = createSupabaseClient(c)
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return c.json({ error: 'Unauthorized' }, 401)

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (!profile || profile.role !== 'admin') return c.json({ error: 'Access denied' }, 403)

  const { full_name, nim, fakultas_id, prodi_id } = await c.req.json()

  if (!full_name || !nim || !fakultas_id || !prodi_id) return c.json({ error: 'All fields are required' }, 400)
  if (!/^\d{8}$/.test(nim)) return c.json({ error: 'NIM must be 8 digits' }, 400)

  const { data, error } = await supabase.from('voters').insert({ full_name, nim, fakultas_id, prodi_id })

  if (error) return c.json({ error: error.message }, 400)

  return c.json({ message: 'Voter added successfully', voter: data[0] })
})

// Submit vote endpoint with blockchain verification
app.post('/submit-vote', async (c) => {
  const supabase = createSupabaseClient(c)
  const { txHash, voter_id, kandidat_id } = await c.req.json()

  const { data: voter, error: voterErr } = await supabase.from('voters').select('*').eq('id', voter_id).single()
  if (voterErr || !voter) return c.json({ error: 'Voter not found' }, 404)

  try {
    await verifyVoteTransaction(txHash, voter.wallet_address, kandidat_id)

    const { data, error } = await supabase.from('votes').insert([{ voter_id, kandidat_id }])
    if (error) throw error

    return c.json({ message: 'Vote verified and saved', vote: data[0] })
  } catch (err) {
    return c.json({ error: err.message }, 400)
  }
})

export default app
