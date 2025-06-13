import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Clock, Shield, Home, Users, Zap, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ResidentialPestControl() {
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
              <Link href="/perkhidmatan" className="text-green-600 hover:underline">
                Perkhidmatan
              </Link>
              <span>/</span>
              <span className="text-gray-600">Kawalan Perosak Kediaman</span>
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
              <Badge className="bg-blue-100 text-blue-800">Perkhidmatan Kediaman</Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight">Kawalan Perosak Kediaman Profesional</h1>
                <p className="text-lg text-muted-foreground">
                  Lindungi rumah dan keluarga anda daripada perosak berbahaya dengan perkhidmatan kawalan perosak
                  kediaman yang komprehensif dan selamat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Phone className="h-5 w-5 mr-2" />
                    Tempah Sekarang
                  </Button>
                  <Button size="lg" variant="outline">
                    Dapatkan Sebut Harga Percuma
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span>Respons dalam 24 jam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Selamat untuk keluarga</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Kawalan Perosak Kediaman"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-green-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Perkhidmatan Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menyediakan penyelesaian kawalan perosak yang menyeluruh untuk semua jenis masalah perosak di rumah
                anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-fit">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Pemeriksaan Menyeluruh</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pemeriksaan 360° seluruh rumah</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pengenalpastian titik masuk perosak</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Laporan terperinci dengan gambar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Cadangan pencegahan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-fit">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Rawatan Berkesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Produk berkualiti tinggi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Kaedah rawatan terkini</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Selamat untuk haiwan peliharaan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Hasil jangka panjang</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-fit">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Sokongan Berterusan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Jaminan perkhidmatan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Lawatan susulan percuma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Khidmat nasihat 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pelan penyelenggaraan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Residential Pests */}
        <section className="py-16 bg-white">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Perosak Biasa di Rumah</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menangani semua jenis perosak yang biasa ditemui di kediaman Malaysia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Semut",
                  description: "Semut dapur, semut api, semut putih",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Lipas",
                  description: "Lipas Jerman, lipas Amerika, lipas Oriental",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Anai-anai",
                  description: "Anai-anai tanah, anai-anai kayu kering",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Tikus",
                  description: "Tikus rumah, tikus got, tikus sawah",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Pepijat",
                  description: "Pepijat katil, pepijat sofa",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Nyamuk",
                  description: "Aedes, Culex, Anopheles",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Lalat",
                  description: "Lalat rumah, lalat buah, lalat longkang",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  name: "Kumbang",
                  description: "Kumbang tepung, kumbang kayu",
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
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{pest.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{pest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Proses Perkhidmatan Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proses yang sistematik dan profesional untuk memastikan hasil yang berkesan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Pemeriksaan Awal",
                  description: "Pemeriksaan menyeluruh untuk mengenal pasti jenis dan tahap serangan perosak.",
                },
                {
                  step: "2",
                  title: "Pelan Rawatan",
                  description: "Menyediakan pelan rawatan yang disesuaikan dengan keperluan rumah anda.",
                },
                {
                  step: "3",
                  title: "Pelaksanaan",
                  description: "Melaksanakan rawatan menggunakan produk dan kaedah yang selamat dan berkesan.",
                },
                {
                  step: "4",
                  title: "Pemantauan",
                  description: "Lawatan susulan untuk memastikan keberkesanan rawatan dan pencegahan.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Pakej Perkhidmatan Kediaman</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih pakej yang sesuai dengan keperluan dan bajet anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-green-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Rawatan Asas</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 150</div>
                  <CardDescription className="mt-2">Sekali rawatan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Pemeriksaan asas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Rawatan 1 jenis perosak</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Jaminan 30 hari</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Pilih Pakej</Button>
                </CardContent>
              </Card>

              <Card className="border-green-600 shadow-lg">
                <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">PALING POPULAR</div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Rawatan Komprehensif</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 280</div>
                  <CardDescription className="mt-2">Sekali rawatan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Pemeriksaan menyeluruh</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Rawatan semua jenis perosak</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Jaminan 90 hari</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>1 lawatan susulan percuma</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Pilih Pakej</Button>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pelan Tahunan</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 80</div>
                  <CardDescription className="mt-2">Sebulan (4 lawatan)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Lawatan setiap 3 bulan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Rawatan pencegahan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Jaminan berterusan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Lawatan kecemasan percuma</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Pilih Pakej</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">Siap untuk Rumah Bebas Perosak?</h2>
            <p className="max-w-2xl mx-auto text-green-50">
              Hubungi kami hari ini untuk mendapatkan pemeriksaan percuma dan sebut harga untuk rumah anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Phone className="h-5 w-5 mr-2" />
                Hubungi Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Tempah Pemeriksaan Percuma
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
