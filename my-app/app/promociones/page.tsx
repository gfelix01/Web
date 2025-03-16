import Image from "next/image"
import Link from "next/link"
import { GlowButton } from "@/components/ui/glow-button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

export const metadata = {
  title: "Promociones | Shua Makeup & Beauty",
  description: "Conoce nuestras promociones especiales en servicios de belleza.",
}

export default function PromocionesPage() {
  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Promociones <span className="text-primary fuchsia-text-shadow">Especiales</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras promociones exclusivas y disfruta de los mejores servicios a precios especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lunes de Mani + Pedi */}
          <Card className="service-card overflow-hidden border-primary/20 hover:border-primary">
            <div className="relative h-96">
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full z-10 fuchsia-glow">
                Oferta Especial
              </div>
              <Image src="/images/lunes.jpg" alt="Lunes de Mani + Pedi" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-primary" />
                <span className="text-gray-600">Lunes</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Lunes de Mani + Pedi</h3>
              <p className="text-gray-600 mb-4">
                Disfruta de nuestro especial de manicure y pedicure los lunes por solo RD$600.
              </p>
              <div className="text-2xl font-bold text-primary mb-4">RD$600</div>
              <GlowButton className="w-full">
                <Link href="tel:8296418720">Reservar ahora</Link>
              </GlowButton>
            </CardContent>
          </Card>

          {/* Maquillaje y Peinado de Novia */}
          <Card className="service-card overflow-hidden border-primary/20 hover:border-primary">
            <div className="relative h-96">
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full z-10 fuchsia-glow">
                Paquete Completo
              </div>
              <Image src="/images/novia.jpg" alt="Maquillaje y peinado de novia" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} className="text-primary" />
                <span className="text-gray-600">Tiempo limitado</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Maquillaje y peinado de novia</h3>
              <p className="text-gray-600 mb-4">
                Paquete especial para novias que incluye prueba de maquillaje, peinado y servicio el día de la boda.
              </p>
              <div className="text-2xl font-bold text-primary mb-4">Consultar precio</div>
              <GlowButton className="w-full">
                <Link href="tel:8296418720">Consultar ahora</Link>
              </GlowButton>
            </CardContent>
          </Card>

          {/* Pestañas 2D-3D */}
          <Card className="service-card overflow-hidden border-primary/20 hover:border-primary">
            <div className="relative h-96">
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full z-10 fuchsia-glow">
                Descuento Especial
              </div>
              <Image src="/images/pestanas-cejas.jpg" alt="Pestañas 2D-3D" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} className="text-primary" />
                <span className="text-gray-600">Tiempo limitado</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pestañas 2D-3D y Extensiones volumen</h3>
              <p className="text-gray-600 mb-4">
                Promoción especial en extensiones de pestañas 2D-3D y volumen. ¡Luce una mirada impactante!
              </p>
              <div className="text-2xl font-bold text-primary mb-4">Consultar precio</div>
              <GlowButton className="w-full">
                <Link href="tel:8296418720">Consultar ahora</Link>
              </GlowButton>
            </CardContent>
          </Card>

          {/* Trenzas */}
          <Card className="service-card overflow-hidden border-primary/20 hover:border-primary">
            <div className="relative h-96">
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full z-10 fuchsia-glow">
                Miércoles Especial
              </div>
              <Image src="/images/trenzas.jpg" alt="Trenzas" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-primary" />
                <span className="text-gray-600">Miércoles</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Miércoles de Trenzas</h3>
              <p className="text-gray-600 mb-4">
                Aprovecha nuestro especial de miércoles con descuentos en todos los estilos de trenzas.
              </p>
              <div className="text-2xl font-bold text-primary mb-4">15% de descuento</div>
              <GlowButton className="w-full">
                <Link href="tel:8296418720">Reservar ahora</Link>
              </GlowButton>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <div className="rounded-2xl fuchsia-gradient p-8 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">¿Quieres aprovechar nuestras promociones?</h2>
              <p className="mb-8 opacity-90">
                Agenda tu cita hoy mismo y menciona la promoción que te interesa al momento de reservar.
              </p>
              <GlowButton className="bg-white text-primary hover:bg-white/90" size="lg">
                <Link href="/contacto">Agendar Cita</Link>
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

