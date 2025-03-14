import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Servicios | Shua Makeup & Beauty",
  description: "Conoce todos nuestros servicios de belleza: maquillaje, cejas, pestañas, uñas y peinados.",
}

export default function ServiciosPage() {
  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Shua Makeup & Beauty ofrecemos una amplia gama de servicios de belleza profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pestañas */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/pestanas.jpg" alt="Pestañas" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Pestañas</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>• Extensiones de pestañas clásicas</li>
                <li>• Extensiones de pestañas 2D-3D</li>
                <li>• Extensiones de volumen ruso</li>
                <li>• Lifting de pestañas</li>
                <li>• Tinte de pestañas</li>
              </ul>
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="/servicios/pestanas" className="flex items-center gap-1">
                  Ver más <ArrowRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Cejas */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/cejas.jpg" alt="Cejas" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Cejas</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>• Diseño de cejas</li>
                <li>• Depilación con hilo</li>
                <li>• Tinte de cejas</li>
                <li>• Laminado de cejas</li>
                <li>• Microblading</li>
              </ul>
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="/servicios/cejas" className="flex items-center gap-1">
                  Ver más <ArrowRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Uñas */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/unas.jpg" alt="Uñas" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Uñas</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>• Manicure básica</li>
                <li>• Manicure semipermanente</li>
                <li>• Uñas acrílicas</li>
                <li>• Pedicure spa</li>
                <li>• Diseños y decoraciones</li>
              </ul>
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="/servicios/unas" className="flex items-center gap-1">
                  Ver más <ArrowRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Maquillaje */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/maquillaje.jpg" alt="Maquillaje" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Maquillaje</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>• Maquillaje social</li>
                <li>• Maquillaje de novia</li>
                <li>• Maquillaje para quinceañeras</li>
                <li>• Maquillaje para eventos especiales</li>
                <li>• Clases de automaquillaje</li>
              </ul>
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="/servicios/maquillaje" className="flex items-center gap-1">
                  Ver más <ArrowRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Peinados */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/peinados.jpg" alt="Peinados" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Peinados</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>• Peinados para novias</li>
                <li>• Peinados para eventos</li>
                <li>• Trenzas</li>
                <li>• Recogidos</li>
                <li>• Peinados para quinceañeras</li>
              </ul>
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="/servicios/peinados" className="flex items-center gap-1">
                  Ver más <ArrowRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Tratamientos */}
          <Card className="service-card overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/tratamientos.jpg" alt="Tratamientos" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Tratamientos</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>• Tratamientos capilares</li>
                <li>• Hidratación facial</li>
                <li>• Limpieza facial profunda</li>
                <li>• Mascarillas especializadas</li>
                <li>• Exfoliación</li>
              </ul>
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="/servicios/tratamientos" className="flex items-center gap-1">
                  Ver más <ArrowRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

