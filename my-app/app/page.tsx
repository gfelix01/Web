import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 hero-gradient">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 md:px-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">Shua</span> Makeup & Beauty
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Resalta tu belleza natural con nuestros servicios profesionales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/servicios">Ver Servicios</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/images/shua.jpg"
              alt="Shua Makeup & Beauty - Maquillaje y peinado de novia"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de belleza para realzar tu imagen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/banner1.jpg" alt="Pestañas y Cejas" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pestañas y Cejas</h3>
                <p className="text-gray-600 mb-4">Pestañas 2D-3D y extensiones volumen. Diseños y tintados de cejas.</p>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="/servicios/pestanas-cejas" className="flex items-center gap-1">
                    Ver más <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/banner2.jpg" alt="Manicure y Pedicure" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Manicure y Pedicure</h3>
                <p className="text-gray-600 mb-4">
                  Servicios completos de manicure y pedicure con los mejores productos.
                </p>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="/servicios/mani-pedi" className="flex items-center gap-1">
                    Ver más <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="service-card overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/tratamientos.jpg" alt="Maquillaje y Peinado" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Maquillaje y Peinado</h3>
                <p className="text-gray-600 mb-4">
                  Maquillaje profesional y peinados para toda ocasión, especialistas en novias.
                </p>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="/servicios/maquillaje-peinado" className="flex items-center gap-1">
                    Ver más <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Promociones Especiales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Aprovecha nuestras promociones exclusivas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="service-card overflow-hidden">
              <div className="relative h-96">
                <Image src="/images/tratamientos.jpg" alt="Lunes de Mani + Pedi" fill className="object-cover" />
              </div>
            </Card>

            <Card className="service-card overflow-hidden">
              <div className="relative h-96">
                <Image src="/images/novia.jpg" alt="Maquillaje y peinado de novia" fill className="object-cover" />
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/promociones">Ver todas las promociones</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre lo que nos hace diferentes y por qué nuestras clientas confían en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="service-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Experiencia</h3>
                <p className="text-gray-600">
                  Más de 5 años de experiencia brindando servicios de belleza de alta calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Satisfacción</h3>
                <p className="text-gray-600">
                  Cientos de clientas satisfechas que regresan por nuestro servicio personalizado.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2v4"></path>
                    <path d="m6.34 6.34-2.83-2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="m6.34 17.66-2.83 2.83"></path>
                    <path d="M12 22v-4"></path>
                    <path d="m17.66 17.66 2.83 2.83"></path>
                    <path d="M22 12h-4"></path>
                    <path d="m17.66 6.34 2.83-2.83"></path>
                    <path d="M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Nos mantenemos actualizados con las últimas tendencias y técnicas en belleza.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contacto">Agenda tu cita hoy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

