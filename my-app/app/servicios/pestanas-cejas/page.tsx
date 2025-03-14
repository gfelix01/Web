import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Pestañas y Cejas | Shua Makeup & Beauty",
  description: "Servicios profesionales de pestañas y cejas: extensiones, lifting, tinte, diseño y más.",
}

export default function PestanasCejasPage() {
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
            <h1 className="text-4xl font-bold mb-4">Pestañas y Cejas</h1>
            <p className="text-gray-600 mb-6">
              En Shua Makeup & Beauty somos especialistas en realzar tu mirada con nuestros servicios profesionales de
              pestañas y cejas.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-700">
                  Utilizamos productos de alta calidad para garantizar resultados duraderos y naturales.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-700">
                  Nuestras técnicas están actualizadas con las últimas tendencias internacionales.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-700">Personalización completa según tu tipo de rostro y preferencias.</p>
              </div>
            </div>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
              <Link href="/contacto">Agendar cita</Link>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden min-h-[300px]">
            <Image src="/images/pestanas-cejas.jpg" alt="Pestañas y Cejas" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nuestros Servicios de Pestañas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Extensiones Clásicas</h3>
                <p className="text-gray-600 mb-4">
                  Aplicación pelo a pelo para un look natural y elegante. Ideal para el día a día.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$1,200</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Extensiones 2D-3D</h3>
                <p className="text-gray-600 mb-4">Mayor volumen y densidad para una mirada más dramática y definida.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Volumen Ruso</h3>
                <p className="text-gray-600 mb-4">Máximo volumen y efecto dramático para ocasiones especiales.</p>
                <div className="text-lg font-bold text-primary">Desde RD$2,200</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Lifting de Pestañas</h3>
                <p className="text-gray-600 mb-4">Eleva tus pestañas naturales para un efecto de rizado permanente.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,500</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tinte de Pestañas</h3>
                <p className="text-gray-600 mb-4">
                  Intensifica el color de tus pestañas para un look más definido sin maquillaje.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Mantenimiento</h3>
                <p className="text-gray-600 mb-4">Mantén tus extensiones perfectas con nuestro servicio de relleno.</p>
                <div className="text-lg font-bold text-primary">Desde RD$900</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nuestros Servicios de Cejas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Diseño de Cejas</h3>
                <p className="text-gray-600 mb-4">
                  Creamos la forma perfecta para tus cejas según tu rostro y preferencias.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$600</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Depilación con Hilo</h3>
                <p className="text-gray-600 mb-4">
                  Técnica precisa para definir y dar forma a tus cejas de manera natural.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$500</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tinte de Cejas</h3>
                <p className="text-gray-600 mb-4">
                  Intensifica el color de tus cejas para un look más definido y expresivo.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$700</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Laminado de Cejas</h3>
                <p className="text-gray-600 mb-4">
                  Disciplina y da volumen a tus cejas con este tratamiento innovador.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$1,200</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Microblading</h3>
                <p className="text-gray-600 mb-4">Técnica semipermanente para cejas perfectamente definidas.</p>
                <div className="text-lg font-bold text-primary">Desde RD$4,500</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Combo Cejas + Pestañas</h3>
                <p className="text-gray-600 mb-4">Diseño de cejas y tinte de pestañas para una mirada completa.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,800</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Lista para transformar tu mirada?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Agenda tu cita hoy mismo y déjanos realzar tu belleza natural con nuestros servicios profesionales de
            pestañas y cejas.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contacto">Agendar cita</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

