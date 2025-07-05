import React from 'react';

const FAQ = () => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2">FAQ (Pertanyaan Umum)</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Bagaimana cara melakukan voting?</strong>
        <br />
        Login menggunakan akun SSO Anda, pilih kandidat yang Anda dukung, lalu konfirmasi pilihan Anda. Pastikan Anda hanya memilih satu kali.
      </li>
      <li>
        <strong>Kapan hasil final diumumkan?</strong>
        <br />
        Hasil final akan diumumkan 1x24 jam setelah voting ditutup melalui website ini dan media sosial resmi himpunan.
      </li>
      <li>
        <strong>Apakah voting ini benar-benar aman dan anonim?</strong>
        <br />
        Ya, sistem kami menggunakan enkripsi end-to-end dan tidak menyimpan data pilihan Anda yang dapat dilacak ke identitas Anda.
      </li>
      <li>
        <strong>Bagaimana jika saya mengalami kendala saat voting?</strong>
        <br />
        Hubungi panitia melalui WhatsApp di <span className="font-mono">0812-3456-7890</span> atau email <span className="font-mono">evoting-support@iwu.ac.id</span> dengan menyertakan bukti screenshot kendala yang dialami.
      </li>
    </ul>
  </section>
);

export default FAQ;
