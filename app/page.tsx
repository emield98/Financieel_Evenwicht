import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Financieel & Fiscaal Evenwicht
              </h1>
              <p className="text-lg md:text-xl max-w-md">
                Voor betrouwbare financiële en fiscale ondersteuning sinds 2008. Ik help u met uw administratie,
                belastingaangiften en financieel advies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/diensten">Mijn Diensten</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Contact Opnemen</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/img/margriet.png" alt="Financieel Evenwicht" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mijn Diensten</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ik bied een breed scala aan financiële en fiscale diensten voor particulieren en bedrijven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Financiële administratie"
              description="Wij zorgen voor al uw in- en verkoopfacturen alsmede het inboeken van uw kas- en bankboeken, voor een overzichtelijke administratie."
              imageSrc="/img/finadm.png"
              href="/diensten/particulier"
            />

            <ServiceCard
              title="Startersbegeleiding"
              description="Wij begeleiden startende ondernemers bij het opzetten en voeren van een financieel overzichtelijke onderneming."
              imageSrc="/img/startersbegeleiding.png"
              href="/diensten/zakelijk"
            />

            <ServiceCard
              title="Debiteurenbeheer"
              description="Verkopen is een noodzaak, maar goed factureren en zorgen dat het geld binnenkomt is zeker zo belangrijk. U kunt het debiteurenbeheer gedeeltelijk of volledig uit handen geven aan ons."
              imageSrc="/img/debiteurenbeheer.png"
              href="/diensten/zakelijk"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Over Financieel Evenwicht</h2>
              <p className="text-lg mb-4">
                Financieel en Fiscaal Evenwicht is sinds 2008 hét administratiekantoor voor particulieren, zzp'ers en
                mkb-bedrijven. Als oprichter combineer ik meer dan 16 jaar ervaring bij ABN AMRO met kennis uit mijn
                werk bij een administratiekantoor en belastingadviesbureau.
              </p>
              <p className="text-lg mb-6">
                Ik geloof in persoonlijk contact, wederzijds respect en vertrouwen. Of u nu een startende ondernemer
                bent of behoefte heeft aan financiële zorgbeheer, ik neem u zoveel mogelijk werk uit handen.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/over">
                  Meer over mij <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/img/finadmfis.png" alt="Over Financieel Evenwicht" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om uw financiën op orde te brengen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met mij op voor een vrijblijvend gesprek over hoe ik u kan helpen.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Opnemen</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
