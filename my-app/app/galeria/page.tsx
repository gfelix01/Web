import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Galería | Shua Makeup & Beauty",
  description: "Explora nuestra galería de trabajos de maquillaje, peinados, uñas, pestañas y cejas.",
}

export default function GaleriaPage() {
  // Definir las categorías y sus imágenes
  const categories = [
    {
      name: "Maquillaje",
      images: [
        { src: "/images/novia.jpg", alt: "Maquillaje de novia" },
        { src: "/images/maquillaje.jpg", alt: "Maquillaje y pestañas" },
      ],
    },
    {
      name: "Peinados",
      images: [
        { src: "/images/peinados.jpg", alt: "Trenzas" },
        { src: "/images/trenzas.jpg", alt: "Trenzas estilo" },
        { src: "/images/trenzas2.jpg", alt: "Trenzas con accesorios" },
      ],
    },
    {
      name: "Uñas",
      images: [
        { src: "/images/unas.jpg", alt: "Manicure y pedicure" },
        { src: "/images/lunes.jpg", alt: "Manicure y pedicure especial" },
      ],
    },
    {
      name: "Pestañas y Cejas",
      images: [
        { src: "/images/cejas.jpg", alt: "Cejas y pestañas" },
        { src: "/images/pestanas-cejas.jpg", alt: "Pestañas y cejas" },
      ],
    },
  ]

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nuestra Galería</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos y descubre por qué somos el salón de belleza preferido
          </p>
        </div>

        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, imgIndex) => (
                <Card key={imgIndex} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Galería de trabajos destacados */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Trabajos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full min-h-[300px]">
                    <Image src="/images/novia.jpg" alt="Maquillaje y peinado de novia" fill className="object-cover" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image src="/images/pestanas-cejas.jpg" alt="Pestañas y cejas" fill className="object-cover" />
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image src="/images/trenzas.jpg" alt="Trenzas" fill className="object-cover" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Banner promocional */}
        <div className="mt-16">
          <Card className="overflow-hidden bg-gradient-to-r from-secondary/20 to-accent/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Te gusta lo que ves?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Agenda tu cita hoy mismo y déjanos realzar tu belleza natural con nuestros servicios profesionales.
              </p>
              <div className="text-2xl font-bold text-primary mb-2">829-641-8720</div>
              <p className="text-gray-600">@shuamakeupstudio</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

