import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Manicure y Pedicure | Shua Makeup & Beauty",
  description: "Servicios profesionales de manicure y pedicure, uñas acrílicas, semipermanentes y más.",
}

export default function ManiPediPage() {
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
            <h1 className="text-4xl font-bold mb-4">Manicure y Pedicure</h1>
            <p className="text-gray-600 mb-6">
              En Shua Makeup & Beauty ofrecemos servicios completos de manicure y pedicure con los mejores productos y
              las técnicas más avanzadas.
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
                  Nuestras técnicas están actualizadas con las últimas tendencias en nail art.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-gray-700">Máxima higiene y esterilización en todos nuestros procedimientos.</p>
              </div>
            </div>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
              <Link href="/contacto">Agendar cita</Link>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden min-h-[300px]">
            <Image src="/images/unas.jpg" alt="Manicure y Pedicure" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Servicios de Manicure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Manicure Básica</h3>
                <p className="text-gray-600 mb-4">Limado, cutículas, hidratación y esmalte tradicional.</p>
                <div className="text-lg font-bold text-primary">Desde RD$500</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Manicure Semipermanente</h3>
                <p className="text-gray-600 mb-4">Manicure completa con esmalte semipermanente de larga duración.</p>
                <div className="text-lg font-bold text-primary">Desde RD$800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Uñas Acrílicas</h3>
                <p className="text-gray-600 mb-4">
                  Extensiones de uñas con acrílico para mayor longitud y resistencia.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$1,500</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Uñas de Gel</h3>
                <p className="text-gray-600 mb-4">Extensiones con gel para un acabado natural y brillante.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Diseños y Decoraciones</h3>
                <p className="text-gray-600 mb-4">Arte en uñas, pedrería, calcomanías y diseños personalizados.</p>
                <div className="text-lg font-bold text-primary">Desde RD$200</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Reparación de Uñas</h3>
                <p className="text-gray-600 mb-4">Arreglo de uñas rotas o dañadas.</p>
                <div className="text-lg font-bold text-primary">Desde RD$300</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Servicios de Pedicure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pedicure Básica</h3>
                <p className="text-gray-600 mb-4">Limado, cutículas, hidratación y esmalte tradicional.</p>
                <div className="text-lg font-bold text-primary">Desde RD$600</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pedicure Semipermanente</h3>
                <p className="text-gray-600 mb-4">Pedicure completa con esmalte semipermanente de larga duración.</p>
                <div className="text-lg font-bold text-primary">Desde RD$900</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pedicure Spa</h3>
                <p className="text-gray-600 mb-4">
                  Tratamiento completo con exfoliación, masaje y mascarilla hidratante.
                </p>
                <div className="text-lg font-bold text-primary">Desde RD$1,200</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tratamiento para Pies Cansados</h3>
                <p className="text-gray-600 mb-4">Masaje terapéutico y tratamiento refrescante para pies fatigados.</p>
                <div className="text-lg font-bold text-primary">Desde RD$800</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Diseños en Pies</h3>
                <p className="text-gray-600 mb-4">Arte en uñas de los pies, pedrería y diseños personalizados.</p>
                <div className="text-lg font-bold text-primary">Desde RD$200</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Combo Mani + Pedi</h3>
                <p className="text-gray-600 mb-4">Manicure y pedicure completas a precio especial.</p>
                <div className="text-lg font-bold text-primary">Desde RD$1,300</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¡Lunes de Mani + Pedi!</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Aprovecha nuestra promoción especial de los lunes: Manicure y pedicure básicas por solo RD$600.
          </p>
          <div className="text-3xl font-bold text-primary mb-6">RD$600</div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contacto">Agendar cita</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

