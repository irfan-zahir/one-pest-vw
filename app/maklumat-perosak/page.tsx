import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Eye,
  Calendar,
  BookOpen,
  Bug,
  Rat,
  BugIcon as Cockroach,
  AntennaIcon as Ant,
  ArrowRight,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PestInformationHub() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-green-600 hover:underline">
                Laman Utama
              </Link>
              <span>/</span>
              <span className="text-gray-600">Maklumat Perosak</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container text-center space-y-6">
            <Badge className="bg-orange-100 text-orange-800">Pusat Maklumat</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Pusat Maklumat Perosak</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ketahui lebih lanjut tentang perosak biasa, cara mengenal pasti serangan, dan langkah pencegahan yang
              berkesan.
            </p>
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Cari maklumat perosak..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-16 bg-green-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Navigasi Pantas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih topik yang anda ingin ketahui lebih lanjut.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <Search className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Panduan Pengenalan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Belajar cara mengenal pasti pelbagai jenis perosak dengan mudah.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Tanda Serangan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Ketahui tanda-tanda awal serangan perosak di rumah anda.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Tip Mengikut Musim</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Langkah pencegahan berdasarkan musim di Malaysia.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Kaedah Rawatan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Pelajari pelbagai kaedah rawatan dan pencegahan.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pest Identification Guide */}
        <section className="py-16 bg-white">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Panduan Pengenalan Perosak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kenali perosak biasa yang ditemui di Malaysia dan ciri-ciri khusus mereka.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Semut",
                  scientificName: "Formicidae",
                  icon: <Ant className="h-8 w-8" />,
                  description: "Serangga sosial yang hidup dalam koloni",
                  characteristics: ["Saiz: 1-15mm", "Warna: Hitam, coklat, merah", "Habitat: Dalam dan luar rumah"],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Lipas",
                  scientificName: "Blattodea",
                  icon: <Cockroach className="h-8 w-8" />,
                  description: "Serangga nokturnal yang suka tempat lembap",
                  characteristics: ["Saiz: 10-50mm", "Warna: Coklat hingga hitam", "Habitat: Dapur, bilik air"],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Anai-anai",
                  scientificName: "Isoptera",
                  icon: <Bug className="h-8 w-8" />,
                  description: "Serangga yang memakan selulosa dalam kayu",
                  characteristics: ["Saiz: 4-15mm", "Warna: Putih hingga coklat", "Habitat: Kayu, kertas"],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Tikus",
                  scientificName: "Rodentia",
                  icon: <Rat className="h-8 w-8" />,
                  description: "Mamalia kecil yang sangat adaptif",
                  characteristics: ["Saiz: 15-25cm", "Warna: Kelabu hingga coklat", "Habitat: Seluruh rumah"],
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((pest, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <Image
                    src={pest.image || "/placeholder.svg"}
                    alt={pest.name}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">{pest.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{pest.name}</CardTitle>
                        <CardDescription className="text-xs italic">{pest.scientificName}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{pest.description}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Ciri-ciri:</h4>
                      <ul className="space-y-1">
                        {pest.characteristics.map((char, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">
                            • {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Baca Selanjutnya <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Signs of Infestation */}
        <section className="py-16 bg-gray-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Tanda-tanda Serangan Perosak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kenali tanda-tanda awal serangan perosak untuk mengambil tindakan segera.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tanda Visual",
                  signs: [
                    "Perosak hidup atau mati",
                    "Najis atau kotoran",
                    "Kesan gigitan pada makanan",
                    "Sarang atau telur",
                    "Kerosakan pada struktur",
                  ],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Tanda Audio",
                  signs: [
                    "Bunyi menggerogot di malam hari",
                    "Bunyi berlari di siling",
                    "Bunyi menggaruk di dinding",
                    "Bunyi bersiul atau mencicit",
                    "Bunyi sayap terbang",
                  ],
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Tanda Bau",
                  signs: [
                    "Bau busuk atau masam",
                    "Bau kencing yang kuat",
                    "Bau manis dari feromon",
                    "Bau bangkai",
                    "Bau kimia dari kelenjar",
                  ],
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((category, index) => (
                <Card key={index}>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.signs.map((sign, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="bg-green-100 rounded-full p-1 mt-0.5">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-sm">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Prevention Tips */}
        <section className="py-16 bg-white">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Tip Pencegahan Mengikut Musim</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Langkah pencegahan yang berbeza diperlukan untuk setiap musim di Malaysia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Musim Hujan (Nov - Mac)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Kelembapan tinggi menarik pelbagai perosak. Fokus pada kawalan kelembapan dan pencegahan air
                    bertakung.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Langkah Pencegahan:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Pastikan saliran berfungsi dengan baik</li>
                      <li>• Gunakan dehumidifier di kawasan lembap</li>
                      <li>• Periksa dan baiki kebocoran paip</li>
                      <li>• Bersihkan longkang secara berkala</li>
                      <li>• Simpan makanan dalam bekas kedap udara</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Musim Kering (Apr - Okt)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Perosak mencari sumber air dan makanan. Fokus pada penyingkiran sumber makanan dan air.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Langkah Pencegahan:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Tutup semua sumber air yang tidak perlu</li>
                      <li>• Bersihkan sisa makanan dengan segera</li>
                      <li>• Periksa dan tutup celah-celah kecil</li>
                      <li>• Potong pokok dan rumput yang rapat</li>
                      <li>• Gunakan perangkap pencegahan</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Methods */}
        <section className="py-16 bg-green-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Kaedah Rawatan Dijelaskan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Memahami pelbagai kaedah rawatan yang digunakan dalam kawalan perosak profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Rawatan Kimia",
                  description: "Penggunaan pestisid yang diluluskan untuk kawalan perosak yang berkesan.",
                  methods: ["Semburan residu", "Umpan gel", "Aerosol", "Fumigasi"],
                  pros: ["Berkesan pantas", "Jangka panjang", "Sesuai untuk serangan besar"],
                  cons: ["Perlu berhati-hati", "Mungkin perlu lawatan berulang"],
                },
                {
                  title: "Rawatan Biologi",
                  description: "Menggunakan musuh semula jadi atau mikroorganisma untuk mengawal perosak.",
                  methods: ["Predator semula jadi", "Parasit", "Bakteria patogen", "Feromon"],
                  pros: ["Mesra alam", "Tidak toksik", "Berkelanjutan"],
                  cons: ["Hasil lebih perlahan", "Perlu keadaan sesuai"],
                },
                {
                  title: "Rawatan Fizikal",
                  description: "Kaedah mekanikal dan fizikal untuk menghalang atau menghapuskan perosak.",
                  methods: ["Perangkap", "Penghalang fizikal", "Haba", "Sejuk"],
                  pros: ["Selamat", "Tiada bahan kimia", "Hasil segera"],
                  cons: ["Perlu penyelenggaraan", "Terhad untuk sesetengah perosak"],
                },
              ].map((method, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Kaedah:</h4>
                      <ul className="space-y-1">
                        {method.methods.map((m, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Kelebihan:</h4>
                      <ul className="space-y-1">
                        {method.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-green-700">
                            ✓ {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-600">Pertimbangan:</h4>
                      <ul className="space-y-1">
                        {method.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-orange-700">
                            ⚠ {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">Masih Ada Soalan?</h2>
            <p className="max-w-2xl mx-auto text-green-50">
              Hubungi pakar kami untuk mendapatkan nasihat percuma tentang masalah perosak anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Hubungi Pakar Kami
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Tempah Pemeriksaan
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
