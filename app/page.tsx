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
  ArrowRight,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-green-50 py-20 md:py-32">
          <div className="container flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Perkhidmatan Kecemasan 24/7</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Penyelesaian Kawalan Perosak Profesional
              </h1>
              <p className="text-lg text-muted-foreground">
                Lindungi rumah dan perniagaan anda daripada perosak dengan perkhidmatan kawalan perosak yang terjamin
                dan mesra alam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Panggilan Kecemasan
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
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
                  <Link href="/maklumat-perosak" className="text-green-600 text-sm hover:underline">
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
                  <Link href="/maklumat-perosak" className="text-green-600 text-sm hover:underline">
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
                  <Link href="/perkhidmatan/anai-anai" className="text-green-600 text-sm hover:underline">
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
                  <Link href="/perkhidmatan/tikus" className="text-green-600 text-sm hover:underline">
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
                  </ul>
                  <div className="mt-4">
                    <Link href="/kawasan-harga" className="text-green-600 hover:underline flex items-center gap-1">
                      Lihat semua kawasan <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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

        {/* Customer Testimonials with Before/After */}
        <section className="py-16 bg-green-50" id="testimoni">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Testimoni Pelanggan & Hasil Kerja</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lihat apa yang pelanggan kami katakan dan hasil kerja kami yang berkesan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Sebelum"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                      <p className="text-xs text-red-600 mt-1">Sebelum</p>
                    </div>
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Selepas"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                      <p className="text-xs text-green-600 mt-1">Selepas</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Perkhidmatan yang sangat profesional. Mereka tiba dalam masa 2 jam selepas panggilan kecemasan saya
                    tentang serangan lipas. Masalah diselesaikan dengan cepat!"
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
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Sebelum"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                      <p className="text-xs text-red-600 mt-1">Sebelum</p>
                    </div>
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Selepas"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                      <p className="text-xs text-green-600 mt-1">Selepas</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Saya sangat berpuas hati dengan perkhidmatan mereka. Juruteknik yang datang sangat berpengetahuan
                    dan menjelaskan semua langkah untuk mengatasi masalah anai-anai."
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
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Sebelum"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                      <p className="text-xs text-red-600 mt-1">Sebelum</p>
                    </div>
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Selepas"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                      <p className="text-xs text-green-600 mt-1">Selepas</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Sebagai pemilik restoran, kawalan perosak adalah sangat penting. PestAway telah menyediakan
                    perkhidmatan yang konsisten dan berkesan selama 3 tahun."
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
                <Phone className="h-5 w-5 mr-2" />
                Hubungi Kami Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Lihat Semua Perkhidmatan
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
