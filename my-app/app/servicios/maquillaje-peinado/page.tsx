import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Maquillaje y Peinado | Shua Makeup & Beauty",
  description: "Servicios profesionales de maquillaje y peinado para novias, eventos especiales y más.",
}

export default function MaquillajePeinadoPage() {
  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <Link href="/servicios" className="flex items-center text-primary hover:text-primary/80 gap-1">
            <ArrowLeft size={16} />
            <span>Volver a servicios</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Maquillaje y Peinado</h1>
            <p className="text-gray-600 mb-6">
              En Shua Makeup & Beauty somos expertos en realzar tu belleza natural con nuestros servicios profesionales
              de maquillaje y peinado para cualquier ocasión.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-700">
                  Utilizamos productos de alta calidad para garantizar un acabado perfecto y duradero.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-700">
                  Nuestros estilistas están capacitados en las últimas tendencias y técnicas.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-700">Personalización completa según tu tipo de rostro, estilo y ocasión.</p>
              </div>
            </div>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
              <Link href="/contacto">Agendar cita</Link>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden min-h-[300px]">
            <Image src="/images/novia.jpg" alt="Maquillaje y Peinado" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Servicios de Maquillaje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Maquillaje Social</h3>
                <p className="text-gray-600 mb-4">Perfecto para eventos sociales, fiestas y ocasiones especiales.</p>
                <div className="text-lg font-bold text-primary">Desde RD$2,000</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Maquillaje de Novia</h3>
                <p className="text-gray-600 mb-4">
                  Maquillaje profesional para el día más importante de tu vida, incluye prueba.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$5,000</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Maquillaje para Quinceañeras</h3>
                <p className="text-gray-600 mb-4">Maquillaje especial para celebrar tus quince años.</p>
                <div className="text-lg font-bold text-primary">Desde RD$2,500</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Maquillaje para Sesión Fotográfica</h3>
                <p className="text-gray-600 mb-4">Maquillaje especializado para lucir perfecta en tus fotos.</p>
                <div className="text-lg font-bold text-primary">Desde RD$2,800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Maquillaje de Día</h3>
                <p className="text-gray-600 mb-4">Look natural y fresco para eventos diurnos.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Clases de Automaquillaje</h3>
                <p className="text-gray-600 mb-4">Aprende técnicas profesionales para maquillarte tú misma.</p>
                <div className="text-lg font-bold text-primary">Desde RD$3,500</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Servicios de Peinado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Peinado para Eventos</h3>
                <p className="text-gray-600 mb-4">Peinados elegantes para cualquier ocasión especial.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,500</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Peinado de Novia</h3>
                <p className="text-gray-600 mb-4">Peinado profesional para el día de tu boda, incluye prueba.</p>
                <div className="text-lg font-bold text-primary">Desde RD$4,000</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Trenzas</h3>
                <p className="text-gray-600 mb-4">Diferentes estilos de trenzas para un look único.</p>
                <div className="text-lg font-bold text-primary">Desde RD$800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Recogidos</h3>
                <p className="text-gray-600 mb-4">Elegantes recogidos para eventos formales.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Peinado para Quinceañeras</h3>
                <p className="text-gray-600 mb-4">Peinados especiales para celebrar tus quince años.</p>
                <div className="text-lg font-bold text-primary">Desde RD$2,000</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Paquete Maquillaje + Peinado</h3>
                <p className="text-gray-600 mb-4">Combinación perfecta para lucir espectacular en cualquier evento.</p>
                <div className="text-lg font-bold text-primary">Desde RD$3,200</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Lista para lucir espectacular?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Agenda tu cita hoy mismo y déjanos realzar tu belleza natural con nuestros servicios profesionales de
            maquillaje y peinado.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contacto">Agendar cita</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

