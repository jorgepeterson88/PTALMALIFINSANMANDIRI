'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Package, Shield, Users, Award, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="PT ALMALIF INSAN MANDIRI" className="h-12 w-12 rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-emerald-800">PT ALMALIF INSAN MANDIRI</h1>
                <p className="text-sm text-gray-600">Distributor Alat Farmasi Terpercaya</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-emerald-700 hover:text-emerald-900 font-medium">Beranda</a>
              <a href="#products" className="text-gray-600 hover:text-emerald-700 font-medium">Produk</a>
              <a href="#about" className="text-gray-600 hover:text-emerald-700 font-medium">Tentang</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-700 font-medium">Kontak</a>
              <a href="/privacy" className="text-gray-600 hover:text-emerald-700 font-medium">Privacy</a>
              <a href="/terms" className="text-gray-600 hover:text-emerald-700 font-medium">Terms</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Solusi Terpercaya untuk
                <span className="text-emerald-600"> Kebutuhan Farmasi</span> Anda
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                PT ALMALIF INSAN MANDIRI menyediakan berbagai macam alat farmasi berkualitas tinggi 
                dengan harga kompetitif untuk mendukung praktik medis yang profesional.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Lihat Produk
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Package className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">500+ Produk</h3>
                    <p className="text-sm text-gray-600">Alat farmasi lengkap</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">1000+ Klien</h3>
                    <p className="text-sm text-gray-600">Rumah sakit & klinik</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Bergaransi</h3>
                    <p className="text-sm text-gray-600">Kualitas terjamin</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Award className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Bersertifikat</h3>
                    <p className="text-sm text-gray-600">Standar medis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Menyediakan berbagai macam alat farmasi dengan kualitas terbaik 
              untuk mendukung praktik medis yang profesional dan aman.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'products' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Kategori Produk
              </button>
              <button
                onClick={() => setActiveTab('brands')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'brands' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Merek Kerjasama
              </button>
            </div>
          </div>

          {activeTab === 'products' && (
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 rounded-lg p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <Package className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Alat Diagnostik</h3>
                  <p className="text-gray-600 mb-4">
                    Tensimeter, stetoskop, termometer, dan berbagai alat diagnostik medis lainnya.
                  </p>
                  <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-cyan-100 rounded-lg p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">APD Medis</h3>
                  <p className="text-gray-600 mb-4">
                    Masker medis, sarung tangan, baju hazmat, dan perlengkapan keselamatan kerja.
                  </p>
                  <Button variant="outline" className="text-cyan-600 border-cyan-600 hover:bg-cyan-50">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Instrumen Bedah</h3>
                  <p className="text-gray-600 mb-4">
                    Pinset, gunting bedah, scalpel, dan instrumen medis steril berkualitas tinggi.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'brands' && (
            <div className="grid md:grid-cols-4 gap-6">
              {['Omron', 'Philips', '3M', 'GE Healthcare'].map((brand) => (
                <Card key={brand} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-lg h-24 mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-400">{brand}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{brand}</h3>
                    <p className="text-sm text-gray-600">Distributor Resmi</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih
                <span className="text-emerald-600"> PT ALMALIF INSAN MANDIRI</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-600 rounded-full p-2 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kualitas Terjamin</h3>
                    <p className="text-gray-600">Semua produk memiliki sertifikat dan standar medis yang sesuai.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-600 rounded-full p-2 mt-1">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Stok Melimpah</h3>
                    <p className="text-gray-600">Ketersediaan produk yang selalu terjaga untuk kebutuhan mendesak.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full p-2 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Layanan Pelanggan</h3>
                    <p className="text-gray-600">Tim profesional siap membantu kebutuhan farmasi Anda 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Statistik Kami</h3>
                <p className="text-gray-600">Bukti komitmen kami terhadap kualitas</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">500+</div>
                  <div className="text-gray-600">Jenis Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600">Merek Kerjasama</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap membantu kebutuhan farmasi Anda dengan profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      Ruko Green Park Avenue 6, Kel. Cikeas Udik, Kec. Gunung Putri, 
                      Kab. Bogor, Provinsi Jawa Barat 16966
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">087851044791</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@almalifinsanmandiri.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Tuliskan pesan Anda..."
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT ALMALIF INSAN MANDIRI" className="h-10 w-10 rounded-lg" />
                <h3 className="text-xl font-bold">PT ALMALIF INSAN MANDIRI</h3>
              </div>
              <p className="text-gray-400">
                Distributor alat farmasi terpercaya dengan kualitas terbaik dan harga kompetitif.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Alat Diagnostik</li>
                <li>APD Medis</li>
                <li>Instrumen Bedah</li>
                <li>Consumables Medis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>087851044791</li>
                <li>info@almalifinsanmandiri.com</li>
                <li>Bogor, Jawa Barat 16966</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT ALMALIF INSAN MANDIRI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}