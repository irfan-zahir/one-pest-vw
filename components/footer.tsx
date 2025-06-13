import Link from "next/link"
import { Bug } from "lucide-react"

export default function Footer() {
  return (
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
                <Link href="/perkhidmatan/kediaman" className="text-sm hover:text-green-500">
                  Kawalan Perosak Kediaman
                </Link>
              </li>
              <li>
                <Link href="/perkhidmatan/komersial" className="text-sm hover:text-green-500">
                  Pengurusan Perosak Komersial
                </Link>
              </li>
              <li>
                <Link href="/perkhidmatan/anai-anai" className="text-sm hover:text-green-500">
                  Pemeriksaan & Rawatan Anai-anai
                </Link>
              </li>
              <li>
                <Link href="/perkhidmatan/tikus" className="text-sm hover:text-green-500">
                  Kawalan & Pengecualian Tikus
                </Link>
              </li>
              <li>
                <Link href="/perkhidmatan/pepijat" className="text-sm hover:text-green-500">
                  Rawatan Pepijat
                </Link>
              </li>
              <li>
                <Link href="/perkhidmatan/penyelenggaraan" className="text-sm hover:text-green-500">
                  Pelan Penyelenggaraan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Pautan Berguna</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang-kami" className="text-sm hover:text-green-500">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kawasan-harga" className="text-sm hover:text-green-500">
                  Kawasan Perkhidmatan
                </Link>
              </li>
              <li>
                <Link href="/maklumat-perosak" className="text-sm hover:text-green-500">
                  Maklumat Perosak
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
            <p className="text-sm mt-2">
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
  )
}
