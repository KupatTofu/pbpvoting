import app from './app.js';
import { serve } from '@hono/node-server';

const port = process.env.PORT || 5173;

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server running at http://localhost:${port}`);
});
