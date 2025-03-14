import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contacto | Shua Makeup & Beauty",
  description: "Contáctanos para agendar una cita o solicitar información sobre nuestros servicios.",
}

export default function ContactoPage() {
  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para agendar una cita o solicitar información sobre nuestros
            servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium">
                        Nombre
                      </label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium">
                        Teléfono
                      </label>
                      <Input id="telefono" placeholder="Tu teléfono" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" placeholder="Tu email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="servicio" className="text-sm font-medium">
                      Servicio de interés
                    </label>
                    <Input id="servicio" placeholder="Servicio que te interesa" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea id="mensaje" placeholder="Tu mensaje" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-gray-600">Av. Santa Rosa esquina Altagracia, Plaza Maureen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-gray-600">
                        <Link href="tel:8296418720" className="hover:text-primary">
                          829-641-8720
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Instagram size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-gray-600">
                        <Link
                          href="https://instagram.com/shuamakeupstudio"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          @shuamakeupstudio
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Horario</h3>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 AM - 7:00 PM
                        <br />
                        Sábados: 9:00 AM - 6:00 PM
                        <br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Mapa</h2>
                <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Mapa de ubicación</p>
                  {/* Aquí se puede integrar un mapa de Google Maps */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

