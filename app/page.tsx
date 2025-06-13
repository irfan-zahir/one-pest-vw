import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Phone,
  Clock,
  MapPin,
  Shield,
  Bug,
  Rat,
  BugIcon as Cockroach,
  AntennaIcon as Ant,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Bug className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">PestAway</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="font-medium transition-colors hover:text-green-600">
              Laman Utama
            </Link>
            <Link href="#" className="font-medium transition-colors hover:text-green-600">
              Perkhidmatan
            </Link>
            <Link href="#" className="font-medium transition-colors hover:text-green-600">
              Maklumat Perosak
            </Link>
            <Link href="#" className="font-medium transition-colors hover:text-green-600">
              Tentang Kami
            </Link>
            <Link href="#" className="font-medium transition-colors hover:text-green-600">
              Kawasan Perkhidmatan
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#hubungi" className="hidden md:flex items-center gap-2 text-green-600 font-medium">
              <Phone className="h-4 w-4" />
              <span>03-1234 5678</span>
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">Hubungi Kami</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-green-50 py-20 md:py-32">
          <div className="container flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Perkhidmatan Kecemasan 24/7</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Penyelesaian Kawalan Perosak Profesional
              </h1>
              <p className="text-lg text-muted-foreground">
                Lindungi rumah dan perniagaan anda daripada perosak dengan perkhidmatan kawalan perosak yang terjamin
                dan mesra alam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Perkhidmatan Kecemasan
                </Button>
                <Button size="lg" variant="outline">
                  Dapatkan Sebut Harga Percuma
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>Respons dalam 2 jam</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Jaminan 100%</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Kawalan Perosak Profesional"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Common Pest Problems */}
        <section className="py-16 bg-white" id="masalah-perosak">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Masalah Perosak Biasa</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menangani pelbagai jenis perosak yang biasa menyerang kediaman dan perniagaan di Malaysia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Ant className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Semut</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Semut boleh menjadi masalah besar di dapur dan kawasan makanan, membawa bakteria dan mencemarkan
                    makanan.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-green-600 text-sm hover:underline">
                    Ketahui lebih lanjut
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Cockroach className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Lipas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lipas membawa penyakit dan boleh menyebabkan masalah kesihatan seperti asma dan alahan.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-green-600 text-sm hover:underline">
                    Ketahui lebih lanjut
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Bug className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Anai-anai</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Anai-anai boleh menyebabkan kerosakan struktur yang serius pada bangunan dan rumah anda.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-green-600 text-sm hover:underline">
                    Ketahui lebih lanjut
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Rat className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Tikus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tikus boleh menyebarkan penyakit, merosakkan harta benda, dan menyebabkan kebakaran elektrik.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-green-600 text-sm hover:underline">
                    Ketahui lebih lanjut
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-green-50" id="kawasan-perkhidmatan">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Kawasan Perkhidmatan & Masa Respons</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menyediakan perkhidmatan kawalan perosak di seluruh Lembah Klang dengan masa respons yang pantas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold">Masa Respons</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Kecemasan: 1-2 jam</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Standard: Dalam hari yang sama</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Pemeriksaan: Dalam 24 jam</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold">Kawasan Perkhidmatan</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Kuala Lumpur</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Petaling Jaya</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Shah Alam</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Subang Jaya</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Klang</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Ampang</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Cheras</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Puchong</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Peta Kawasan Perkhidmatan"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Safety Certifications */}
        <section className="py-16 bg-white" id="keselamatan">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Sijil Keselamatan & Pilihan Mesra Alam</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami mengutamakan keselamatan anda dan alam sekitar dengan menggunakan produk dan kaedah yang
                diluluskan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Dilesenkan & Disahkan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Semua juruteknik kami dilesenkan dan disahkan oleh Jabatan Pertanian Malaysia.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-green-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="M8 11V9l4 4 4-4v2" />
                    </svg>
                  </div>
                  <CardTitle className="mt-4">Produk Selamat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Kami hanya menggunakan produk yang diluluskan dan selamat untuk manusia dan haiwan peliharaan.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-green-600"
                    >
                      <path d="M2 22a8 8 0 0 1 8-8h12" />
                      <path d="M17 11V3h4" />
                      <path d="m21 7-4-4-4 4" />
                      <circle cx="9" cy="9" r="7" />
                    </svg>
                  </div>
                  <CardTitle className="mt-4">Mesra Alam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Kami menawarkan pilihan kawalan perosak mesra alam yang mengurangkan kesan terhadap alam sekitar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-green-50" id="testimoni">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Testimoni Pelanggan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lihat apa yang pelanggan kami katakan tentang perkhidmatan kawalan perosak kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-1">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Pelanggan"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ahmad Razali</CardTitle>
                      <CardDescription>Petaling Jaya</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Perkhidmatan yang sangat profesional. Mereka tiba dalam masa 2 jam selepas panggilan kecemasan saya
                    tentang serangan lipas. Masalah diselesaikan dengan cepat dan tiada lipas sejak itu!"
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#16a34a"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-1">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Pelanggan"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Siti Aminah</CardTitle>
                      <CardDescription>Shah Alam</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Saya sangat berpuas hati dengan perkhidmatan mereka. Juruteknik yang datang sangat berpengetahuan
                    dan menjelaskan semua langkah yang diambil untuk mengatasi masalah anai-anai di rumah saya."
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#16a34a"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-1">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Pelanggan"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Tan Wei Ming</CardTitle>
                      <CardDescription>Subang Jaya</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Sebagai pemilik restoran, kawalan perosak adalah sangat penting. PestAway telah menyediakan
                    perkhidmatan yang konsisten dan berkesan untuk perniagaan saya selama 3 tahun. Sangat disyorkan!"
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#16a34a"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white" id="perkhidmatan">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Perkhidmatan Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menawarkan pelbagai perkhidmatan kawalan perosak untuk keperluan kediaman dan komersial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kawalan Perosak Kediaman</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Perkhidmatan kawalan perosak komprehensif untuk rumah anda, melindungi keluarga anda daripada
                    perosak berbahaya.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pemeriksaan menyeluruh</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rawatan berkesan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pencegahan jangka panjang</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ketahui Lebih Lanjut</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pengurusan Perosak Komersial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Penyelesaian kawalan perosak untuk perniagaan, restoran, hotel, dan bangunan komersial.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Mematuhi peraturan kesihatan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Perkhidmatan diskresi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pelan penyelenggaraan berkala</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ketahui Lebih Lanjut</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pemeriksaan & Rawatan Anai-anai</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pemeriksaan dan rawatan anai-anai yang menyeluruh untuk melindungi struktur bangunan anda.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pemeriksaan terperinci</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rawatan penghalang</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Jaminan 5 tahun</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ketahui Lebih Lanjut</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kawalan & Pengecualian Tikus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Penyelesaian komprehensif untuk menghapuskan dan mencegah serangan tikus di premis anda.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pengesanan titik masuk</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Perangkap dan umpan selamat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Langkah pencegahan</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ketahui Lebih Lanjut</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rawatan Pepijat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Rawatan khusus untuk menghapuskan pepijat sepenuhnya dari kediaman atau hotel anda.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pemeriksaan menyeluruh</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rawatan haba</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rawatan susulan</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ketahui Lebih Lanjut</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pelan Penyelenggaraan Pencegahan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pelan penyelenggaraan berkala untuk mencegah serangan perosak dan memastikan premis anda bebas
                    perosak.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pemeriksaan berkala</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rawatan pencegahan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Laporan terperinci</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Ketahui Lebih Lanjut</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Pest Information Hub */}
        <section className="py-16 bg-green-50" id="maklumat-perosak">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Pusat Maklumat Perosak</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ketahui lebih lanjut tentang perosak biasa, tanda-tanda serangan, dan cara mencegahnya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Panduan Pengenalan Perosak"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Panduan Pengenalan Perosak</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Panduan lengkap untuk mengenal pasti pelbagai jenis perosak yang biasa ditemui di Malaysia.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-green-600 hover:underline">
                    Baca Selanjutnya
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Tanda-tanda Serangan"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Tanda-tanda Serangan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ketahui tanda-tanda awal serangan perosak untuk mengambil tindakan segera sebelum masalah menjadi
                    lebih serius.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-green-600 hover:underline">
                    Baca Selanjutnya
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Tip Pencegahan Mengikut Musim"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Tip Pencegahan Mengikut Musim</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tip berguna untuk mencegah serangan perosak berdasarkan musim di Malaysia, termasuk musim hujan dan
                    kemarau.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-green-600 hover:underline">
                    Baca Selanjutnya
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Lihat Semua Artikel
              </Button>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 bg-white" id="tentang-kami">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Tentang Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Penyedia perkhidmatan kawalan perosak profesional dengan pengalaman lebih 15 tahun di Malaysia.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pasukan PestAway"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Juruteknik Berlesen</h3>
                  <p className="text-muted-foreground">
                    Semua juruteknik kami berlesen dan disahkan oleh Jabatan Pertanian Malaysia dengan latihan
                    profesional dalam kawalan perosak.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Pengalaman di Kawasan Tempatan</h3>
                  <p className="text-muted-foreground">
                    Dengan pengalaman lebih 15 tahun di Lembah Klang, kami memahami cabaran kawalan perosak tempatan dan
                    cara terbaik untuk mengatasinya.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Protokol Keselamatan</h3>
                  <p className="text-muted-foreground">
                    Kami mengutamakan keselamatan anda dengan protokol ketat dan pendekatan kawalan perosak yang mesra
                    alam.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Insurans & Jaminan</h3>
                  <p className="text-muted-foreground">
                    Perkhidmatan kami dilindungi insurans sepenuhnya dan datang dengan jaminan kepuasan untuk ketenangan
                    fikiran anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas & Pricing */}
        <section className="py-16 bg-green-50" id="harga">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Kawasan Perkhidmatan & Harga</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami menawarkan pelbagai pakej perkhidmatan untuk memenuhi keperluan dan bajet anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-green-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Perkhidmatan Sekali</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 180</div>
                  <CardDescription className="mt-2">Bermula dari</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Pemeriksaan menyeluruh</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Rawatan segera</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Laporan perosak</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Jaminan 30 hari</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Tempah Sekarang</Button>
                </CardFooter>
              </Card>

              <Card className="border-green-600 shadow-lg">
                <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">PALING POPULAR</div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pakej Bulanan</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 120</div>
                  <CardDescription className="mt-2">Sebulan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Lawatan bulanan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Rawatan pencegahan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Laporan bulanan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Lawatan kecemasan percuma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Jaminan berterusan</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Tempah Sekarang</Button>
                </CardFooter>
              </Card>

              <Card className="border-green-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Pakej Suku Tahunan</CardTitle>
                  <div className="mt-4 text-4xl font-bold">RM 100</div>
                  <CardDescription className="mt-2">Sebulan</CardDescription>
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
                      <span>Laporan terperinci</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Diskaun 20% untuk lawatan tambahan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Jaminan berterusan</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Tempah Sekarang</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Tawaran Khas</h3>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Dapatkan pemeriksaan percuma untuk rumah atau perniagaan anda. Tiada kewajipan, tiada kos
                    tersembunyi.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">Tempah Pemeriksaan Percuma</Button>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Kadar kecemasan 24/7 tersedia untuk situasi mendesak. Hubungi kami pada bila-bila masa untuk bantuan
                    segera.
                  </p>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Hubungi Talian Kecemasan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white" id="hubungi">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Hubungi Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hubungi kami untuk mendapatkan sebut harga percuma atau untuk menjadualkan perkhidmatan kawalan perosak.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Telefon</h3>
                    <p className="text-muted-foreground">03-1234 5678</p>
                    <p className="text-muted-foreground">019-876 5432 (Kecemasan)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">E-mel</h3>
                    <p className="text-muted-foreground">info@pestaway.com.my</p>
                    <p className="text-muted-foreground">kecemasan@pestaway.com.my</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Alamat</h3>
                    <p className="text-muted-foreground">
                      123, Jalan Bunga Raya,
                      <br />
                      Taman Setia Jaya,
                      <br />
                      47300 Petaling Jaya,
                      <br />
                      Selangor, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Waktu Operasi</h3>
                    <p className="text-muted-foreground">
                      Isnin - Jumaat: 8:00 pagi - 6:00 petang
                      <br />
                      Sabtu: 9:00 pagi - 3:00 petang
                      <br />
                      Ahad: Tutup
                      <br />
                      Perkhidmatan Kecemasan: 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nama
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Nama penuh anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-mel
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="E-mel anda"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Nombor telefon anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Perkhidmatan
                      </label>
                      <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Pilih perkhidmatan</option>
                        <option value="residential">Kawalan Perosak Kediaman</option>
                        <option value="commercial">Pengurusan Perosak Komersial</option>
                        <option value="termite">Pemeriksaan & Rawatan Anai-anai</option>
                        <option value="rodent">Kawalan & Pengecualian Tikus</option>
                        <option value="bedbug">Rawatan Pepijat</option>
                        <option value="maintenance">Pelan Penyelenggaraan</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">
                      Alamat
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Alamat lengkap anda"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mesej
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
                      placeholder="Sila berikan maklumat tentang masalah perosak anda"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Hantar Pertanyaan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">Bebas Perosak, Hidup Tenang</h2>
            <p className="max-w-2xl mx-auto text-green-50">
              Dapatkan perkhidmatan kawalan perosak profesional hari ini dan nikmati rumah atau perniagaan yang bebas
              perosak.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Hubungi Kami Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Dapatkan Sebut Harga Percuma
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Bug className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold text-white">PestAway</span>
              </div>
              <p className="text-sm">
                Penyedia perkhidmatan kawalan perosak profesional dengan pengalaman lebih 15 tahun di Malaysia.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Perkhidmatan</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Kawalan Perosak Kediaman
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Pengurusan Perosak Komersial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Pemeriksaan & Rawatan Anai-anai
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Kawalan & Pengecualian Tikus
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Rawatan Pepijat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Pelan Penyelenggaraan
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Pautan Berguna</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Kawasan Perkhidmatan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Harga
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Testimoni
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-green-500">
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Hubungi Kami</h3>
              <p className="text-sm">
                123, Jalan Bunga Raya,
                <br />
                Taman Setia Jaya,
                <br />
                47300 Petaling Jaya,
                <br />
                Selangor, Malaysia
              </p>
              <p className="text-sm">
                Telefon: 03-1234 5678
                <br />
                E-mel: info@pestaway.com.my
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6 text-center text-sm">
            &copy; 2023 PestAway. Hak Cipta Terpelihara.
          </div>
        </div>
      </footer>
    </div>
  )
}
