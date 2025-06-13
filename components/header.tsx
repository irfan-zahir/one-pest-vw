import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bug, Phone, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Bug className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">PestAway</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-green-600">
            Laman Utama
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium transition-colors hover:text-green-600">
              Perkhidmatan
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/kediaman">Kawalan Perosak Kediaman</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/komersial">Pengurusan Perosak Komersial</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/anai-anai">Pemeriksaan & Rawatan Anai-anai</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/tikus">Kawalan & Pengecualian Tikus</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/pepijat">Rawatan Pepijat</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/hidupan-liar">Penyingkiran Hidupan Liar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/penyelenggaraan">Pelan Penyelenggaraan Pencegahan</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/maklumat-perosak" className="font-medium transition-colors hover:text-green-600">
            Maklumat Perosak
          </Link>
          <Link href="/tentang-kami" className="font-medium transition-colors hover:text-green-600">
            Tentang Kami
          </Link>
          <Link href="/kawasan-harga" className="font-medium transition-colors hover:text-green-600">
            Kawasan & Harga
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="tel:03-1234-5678" className="hidden md:flex items-center gap-2 text-green-600 font-medium">
            <Phone className="h-4 w-4" />
            <span>03-1234 5678</span>
          </Link>
          <Button className="bg-green-600 hover:bg-green-700">Hubungi Kami</Button>

          {/* Mobile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/">Laman Utama</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/kediaman">Perkhidmatan Kediaman</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perkhidmatan/komersial">Perkhidmatan Komersial</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/maklumat-perosak">Maklumat Perosak</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tentang-kami">Tentang Kami</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/kawasan-harga">Kawasan & Harga</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
