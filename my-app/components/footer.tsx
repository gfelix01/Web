import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/logo.png"
            alt="Shua Makeup & Beauty"
            width={120}
            height={50}
            className="h-auto w-auto mb-4"
          />
          <p className="text-gray-600 text-center md:text-left">
            Salón de belleza especializado en maquillaje, cejas, pestañas, uñas y peinados.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Contacto</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <p className="text-gray-600">Av. Santa Rosa esquina Altagracia, Plaza Maureen</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <Link href="tel:8296418720" className="text-gray-600 hover:text-primary">
                829-641-8720
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Instagram size={18} className="text-primary" />
              <Link
                href="https://instagram.com/shuamakeupstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                @shuamakeupstudio
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Horario</h3>
          <ul className="text-gray-600">
            <li>Lunes a Viernes: 9:00 AM - 7:00 PM</li>
            <li>Sábados: 9:00 AM - 6:00 PM</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-primary">Shua Makeup & Beauty</span>. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

