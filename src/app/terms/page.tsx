'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="PT ALMALIF INSAN MANDIRI" className="h-10 w-10 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-emerald-800">PT ALMALIF INSAN MANDIRI</h1>
                <p className="text-xs text-gray-600">Terms and Conditions</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-emerald-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <FileText className="h-10 w-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Syarat dan Ketentuan PT ALMALIF INSAN MANDIRI
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Scale className="mr-3 h-6 w-6 text-emerald-600" />
                Penerimaan Syarat dan Ketentuan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di PT ALMALIF INSAN MANDIRI. Syarat dan Ketentuan ini mengatur 
                penggunaan website, layanan, dan produk yang kami sediakan. Dengan mengakses 
                atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="mr-3 h-6 w-6 text-emerald-600" />
                Definisi
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">"Perusahaan"</p>
                  <p className="text-gray-600">Merujuk pada PT ALMALIF INSAN MANDIRI</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">"Pelanggan"</p>
                  <p className="text-gray-600">Merujuk pada individu atau entitas yang menggunakan layanan kami</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">"Produk"</p>
                  <p className="text-gray-600">Merujuk pada alat farmasi dan peralatan medis yang kami jual</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">"Layanan"</p>
                  <p className="text-gray-600">Merujuk pada semua layanan yang kami sediakan termasuk penjualan dan dukungan</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layanan Kami</h2>
              <p className="text-gray-600 mb-4">
                PT ALMALIF INSAN MANDIRI menyediakan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Penjualan alat farmasi dan peralatan medis</li>
                <li>Konsultasi produk dan kebutuhan medis</li>
                <li>Layanan purnajual dan dukungan teknis</li>
                <li>Informasi produk dan spesifikasi teknis</li>
                <li>Pengiriman produk ke seluruh Indonesia</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kewajiban Pelanggan</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pelanggan, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Memenuhi persyaratan pembelian yang berlaku</li>
                <li>Mematuhi semua peraturan dan ketentuan penggunaan produk</li>
                <li>Tidak menggunakan produk untuk tujuan ilegal</li>
                <li>Melaporkan masalah atau kerusakan produk secara tepat waktu</li>
                <li>Melakukan pembayaran sesuai dengan kesepakatan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Harga dan Pembayaran</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <strong>Harga:</strong> Harga produk yang tercantum dapat berubah sewaktu-waktu 
                  tanpa pemberitahuan sebelumnya. Harga yang berlaku adalah harga pada saat transaksi.
                </p>
                <p className="text-gray-600">
                  <strong>Metode Pembayaran:</strong> Kami menerima berbagai metode pembayaran 
                  termasuk transfer bank, kartu kredit, dan pembayaran tunai.
                </p>
                <p className="text-gray-600">
                  <strong>Pembayaran:</strong> Pembayaran harus dilakukan sesuai dengan kesepakatan 
                  yang telah ditetapkan. Keterlambatan pembayaran dapat dikenakan denda.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pengiriman dan Pengembalian</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <strong>Pengiriman:</strong> Kami akan mengirimkan produk ke alamat yang telah 
                  ditentukan. Waktu pengiriman bervariasi tergantung lokasi dan ketersediaan produk.
                </p>
                <p className="text-gray-600">
                  <strong>Pemeriksaan Produk:</strong> Pelanggan wajib memeriksa kondisi produk 
                  saat diterima dan melaporkan kerusakan atau kekurangan dalam waktu 24 jam.
                </p>
                <p className="text-gray-600">
                  <strong>Pengembalian:</strong> Produk dapat dikembalikan dalam kondisi asli 
                  dan tidak terpakai dalam waktu 7 hari sejak tanggal pembelian, dengan syarat dan 
                  ketentuan yang berlaku.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Garansi Produk</h2>
              <p className="text-gray-600 mb-4">
                Kebijakan garansi kami meliputi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Garansi produk berlaku sesuai dengan ketentuan pabrik</li>
                <li>Garansi tidak berlaku untuk kerusakan akibat penggunaan yang salah</li>
                <li>Klaim garansi harus disertai dengan bukti pembelian</li>
                <li>Perusahaan berhak melakukan pengecekan sebelum persetujuan garansi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600">
                Semua konten, merek dagang, logo, dan materi lainnya di website kami merupakan 
                hak milik PT ALMALIF INSAN MANDIRI atau pihak ketiga yang memiliki lisensi. 
                Penggunaan tanpa izin dilarang keras.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600 mb-4">
                Perusahaan tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian tidak langsung atau konsekuensial</li>
                <li>Keterlambatan pengiriman di luar kendali kami</li>
                <li>Penggunaan produk yang tidak sesuai dengan instruksi</li>
                <li>Kerusakan akibat bencana alam atau force majeure</li>
                <li>Kehilangan data atau informasi selama transmisi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privasi dan Keamanan</h2>
              <p className="text-gray-600">
                Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Informasi lebih lanjut mengenai kebijakan privasi kami dapat ditemukan di 
                halaman Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600">
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan 
                diberitahukan melalui website atau email Anda. Penggunaan terus menerus layanan 
                kami setelah perubahan menunjukkan penerimaan Anda terhadap syarat dan ketentuan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pemutusan Hubungan</h2>
              <p className="text-gray-600">
                Kami berhak menghentikan atau menangguhkan akses Anda ke layanan kami jika:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Anda melanggar syarat dan ketentuan ini</li>
                <li>Anda menggunakan layanan untuk tujuan ilegal</li>
                <li>Anda membahayakan keamanan sistem kami</li>
                <li>Adanya pelanggaran hukum yang berlaku</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hukum yang Berlaku</h2>
              <p className="text-gray-600">
                Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa 
                akan diselesaikan melalui musyawarah terlebih dahulu, dan jika tidak mencapai kesepakatan, 
                akan diselesaikan melalui pengadilan yang berwenang di Bogor, Jawa Barat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-emerald-600" />
                Kontak Kami
              </h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <p className="text-gray-700"><strong>PT ALMALIF INSAN MANDIRI</strong></p>
                <p className="text-gray-600">Email: legal@almalifinsanmandiri.com</p>
                <p className="text-gray-600">Telepon: 087851044791</p>
                <p className="text-gray-600">
                  Alamat: Ruko Green Park Avenue 6, Kel. Cikeas Udik, Kec. Gunung Putri, 
                  Kab. Bogor, Provinsi Jawa Barat 16966
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/logo.png" alt="PT ALMALIF INSAN MANDIRI" className="h-8 w-8 rounded-lg" />
              <h3 className="text-lg font-bold">PT ALMALIF INSAN MANDIRI</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Distributor alat farmasi terpercaya dengan kualitas terbaik
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            </div>
            <div className="border-t border-gray-800 mt-6 pt-6 text-gray-400 text-sm">
              <p>&copy; 2024 PT ALMALIF INSAN MANDIRI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}