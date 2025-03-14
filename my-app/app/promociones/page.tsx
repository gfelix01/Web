import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
          <h1 className="text-4xl font-bold mb-4">Promociones Especiales</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras promociones exclusivas y disfruta de los mejores servicios a precios especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lunes de Mani + Pedi */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-96">
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
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="tel:8296418720">Reservar ahora</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Maquillaje y Peinado de Novia */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-96">
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
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="tel:8296418720">Consultar ahora</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pestañas 2D-3D */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-96">
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
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="tel:8296418720">Consultar ahora</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Trenzas */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-96">
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
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="tel:8296418720">Reservar ahora</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

