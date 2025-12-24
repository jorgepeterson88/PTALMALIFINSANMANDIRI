'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
                <p className="text-xs text-gray-600">Privacy Policy</p>
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
              <Shield className="h-10 w-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Kebijakan Privasi PT ALMALIF INSAN MANDIRI
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
                <Eye className="mr-3 h-6 w-6 text-emerald-600" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                PT ALMALIF INSAN MANDIRI ("kami", "perusahaan") berkomitmen untuk melindungi privasi 
                dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
                menggunakan, melindungi, dan membagikan informasi pribadi Anda saat menggunakan layanan kami, 
                termasuk website dan layanan terkait lainnya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="mr-3 h-6 w-6 text-emerald-600" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Informasi Pribadi</h3>
                  <p className="text-gray-600">
                    Kami dapat mengumpulkan informasi pribadi seperti:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                    <li>Nama perusahaan/instansi</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Informasi Teknis</h3>
                  <p className="text-gray-600">
                    Informasi yang dikumpulkan secara otomatis:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Sistem operasi</li>
                    <li>Data penggunaan website</li>
                    <li>Cookie dan teknologi serupa</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="mr-3 h-6 w-6 text-emerald-600" />
                Penggunaan Informasi
              </h2>
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengirimkan informasi produk dan penawaran khusus</li>
                <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
                <li>Memproses pendaftaran dan autentikasi akun</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li>Mencegah aktivitas ilegal dan melindungi keamanan sistem</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pembagian Informasi</h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, 
                kecuali dalam situasi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Kepada penyedia layanan yang membantu operasional bisnis kami</li>
                <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                <li>Dalam hubungannya dengan merger, akuisisi, atau penjualan aset perusahaan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Keamanan Data</h2>
              <p className="text-gray-600">
                Kami menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda, 
                termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Protokol keamanan fisik dan digital</li>
                <li>Monitoring rutin terhadap sistem keamanan</li>
                <li>Pelatihan staf tentang perlindungan data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Anda</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pemilik data, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan)</li>
                <li>Menolak pemrosesan data untuk tujuan pemasaran</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan yang telah diberikan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie</h2>
              <p className="text-gray-600">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah 
                file teks kecil yang disimpan di browser Anda. Anda dapat mengatur browser untuk menolak 
                cookie, namun ini dapat memengaruhi fungsionalitas website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kebijakan Penyimpanan</h2>
              <p className="text-gray-600">
                Kami menyimpan informasi pribadi Anda selama diperlukan untuk tujuan pengumpulan 
                atau sesuai dengan persyaratan hukum yang berlaku. Periode penyimpanan bervariasi 
                tergantung pada jenis informasi dan tujuan penggunaannya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau email Anda. Penggunaan terus menerus layanan kami 
                setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <p className="text-gray-700"><strong>PT ALMALIF INSAN MANDIRI</strong></p>
                <p className="text-gray-600">Email: privacy@almalifinsanmandiri.com</p>
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