import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Clock, Shield, Building, Users, FileText, ArrowLeft, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CommercialPestManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-green-600 hover:underline">Laman Utama</Link>
              <span>/</span>
              <Link href="/perkhidmatan" className="text-green-600 hover:underline">Perkhidmatan</Link>
              <span>/</span>
              <span className="text-gray-600">Pengurusan Perosak Komersial</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/perkhidmatan" className="text-green-600 hover:text-green-700">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <Badge className="bg-purple-100 text-purple-800">Perkhidmatan Komersial</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight">
                  Pengurusan Perosak Komersial Profesional
                </h1>
                <p className="text-lg text-muted-foreground">
                  Lindungi perniagaan anda dengan perkhidmatan kawalan perosak komersial yang mematuhi 
                  piawaian kesihatan dan keselamatan industri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Phone className="h-5 w-5 mr-2" />
                    Konsultasi Percuma
                  </Button>
                  <Button size="lg" variant="outline">
                    Muat Turun Brosur
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span>Perkhidmatan 24/7</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Mematuhi piawaian industri</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pengurusan Perosak Komersial"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-green-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Industri Yang Kami Layani</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menyediakan perkhidmatan kawalan perosak yang disesuaikan untuk pelbagai jenis perniagaan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Restoran & F&B",
                  description: "Kawalan perosak khusus untuk industri makanan dan minuman",
                  features: ["Mematuhi HACCP", "Audit berkala", "Dokumentasi lengkap"],
                  image: "/placeholder.svg?height=200&width=300"
                },
                {
                  title: "Hotel & Resort",
                  description: "Perkhidmatan diskret untuk industri hospitaliti",
                  features: ["Rawatan senyap", "Jadual fleksibel", "Jaminan kepuasan tetamu"],
                  image: "/placeholder.svg?height=200&width=300"
                },
                {
                  title: "Pejabat & Bangunan",
                  description: "Pengurusan perosak untuk ruang kerja dan bangunan komersial",
                  features: ["Minimum gangguan", "Rawatan malam", "Pelan penyelenggaraan"],
                  image: "/placeholder.svg?height=200&width=300"
                },
                {
                  title: "Kilang & Gudang",
                  description: "Kawalan perosak untuk kemudahan industri dan penyimpanan",
                  features: ["Kawalan tikus", "Monitoring berterusan", "Laporan bulanan"],
                  image: "/placeholder.svg?height=200&width=300"
                },
                {
                  title: "Pusat Membeli-belah",
                  description: "Perkhidmatan untuk kompleks runcit dan pusat komersial",
                  features: ["Koordinasi dengan penyewa", "Rawatan berjadual", "Respons pantas"],
                  image: "/placeholder.svg?height=200&width=300"
                },
                {
                  title: "Sekolah & Institusi",
                  description: "Kawalan perosak selamat untuk institusi pendidikan",
                  features: ["Produk selamat kanak-kanak", "Rawatan cuti sekolah", "Sijil keselamatan"],
                  image: "/placeholder.svg?height=200&width=300"
                }
              ].map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="py-16 bg-white">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Pematuhan & Pensijilan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami memastikan perkhidmatan kami mematuhi semua piawaian industri dan peraturan keselamatan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">HACCP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Mematuhi piawaian Hazard Analysis Critical Control Points untuk industri makanan.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">ISO 9001</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Sistem pengurusan kualiti yang diiktiraf antarabangsa untuk perkhidmatan terbaik.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <Building className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Lesen DOA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Berlesen penuh dari Jabatan Pertanian Malaysia untuk kawalan perosak komersial.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Insurans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Dilindungi insurans liabiliti awam sehingga RM 1 juta untuk ketenangan fikiran anda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Pakej Perkhidmatan Komersial</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih pakej yang sesuai dengan saiz dan keperluan perniagaan anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-green-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Perniagaan Kecil</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 300</div>
                  <CardDescription className="mt-2\">Sebulan (< 2,000 kaki persegi)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Lawatan bulanan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Rawatan asas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Laporan ringkas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Sokongan telefon</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Pilih Pakej</Button>
                </CardContent>
              </Card>

              <Card className="border-green-600 shadow-lg">
                <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">PALING POPULAR</div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Perniagaan Sederhana</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 600</div>
                  <CardDescription className="mt-2">Sebulan (2,000-10,000 kaki persegi)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Lawatan 2 minggu sekali</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Rawatan komprehensif</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Laporan terperinci</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Lawatan kecemasan percuma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Monitoring digital</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Pilih Pakej</Button>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Perniagaan Besar</CardTitle>
                  <div className="mt-4 text-4xl font-bold">Sebut Harga</div>
                  <CardDescription className="mt-2">Disesuaikan (> 10,000 kaki persegi)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Jadual disesuaikan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Pelan khusus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Pengurus akaun khusus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Sistem monitoring 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Latihan kakitangan</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Hubungi Kami</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Mengapa Pilih Kami?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami memahami keperluan unik setiap perniagaan dan menyediakan penyelesaian yang disesuaikan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pasukan Berpengalaman</h3>
                    <p className="text-muted-foreground">
                      Juruteknik berlesen dengan pengalaman lebih 10 tahun dalam kawalan perosak komersial.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Perkhidmatan 24/7</h3>
                    <p className="text-muted-foreground">
                      Respons kecemasan tersedia 24 jam sehari, 7 hari seminggu untuk keperluan mendesak.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dokumentasi Lengkap</h3>
                    <p className="text-muted-foreground">
                      Laporan terperinci dan dokumentasi untuk audit dan pematuhan peraturan.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Pasukan Profesional"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">Siap untuk Melindungi Perniagaan Anda?</h2>
            <p className="max-w-2xl mx-auto text-green-50">
              Hubungi kami untuk konsultasi percuma dan dapatkan pelan kawalan perosak yang disesuaikan untuk perniagaan anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Phone className="h-5 w-5 mr-2" />
                Konsultasi Percuma
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Muat Turun Brosur
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
