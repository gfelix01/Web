"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Shua Makeup & Beauty" width={100} height={40} className="h-auto w-auto" />
        </Link>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/servicios" className="text-sm font-medium transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="/galeria" className="text-sm font-medium transition-colors hover:text-primary">
            Galería
          </Link>
          <Link href="/promociones" className="text-sm font-medium transition-colors hover:text-primary">
            Promociones
          </Link>
          <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <Link href="tel:8296418720" className="flex items-center gap-2">
              <Phone size={16} />
              <span>829-641-8720</span>
            </Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/galeria"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="/promociones"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Promociones
              </Link>
              <Link
                href="/contacto"
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild variant="default" className="mt-2 bg-primary hover:bg-primary/90">
                <Link href="tel:8296418720" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>829-641-8720</span>
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

