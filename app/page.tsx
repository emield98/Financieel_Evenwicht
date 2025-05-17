import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/service-card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary via-primary/75 to-secondary/10 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Financieel & Fiscaal Evenwicht
              </h1>
              <p className="text-lg md:text-xl max-w-md">
                Voor betrouwbare financiële en fiscale ondersteuning sinds 2008.
                Wij helpen u met uw administratie, belastingaangiften en
                financieel advies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/diensten">Onze diensten</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-primary border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact opnemen</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/img/margriet.png"
                alt="Financieel Evenwicht"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Onze diensten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wij bieden een breed scala aan financiële en fiscale diensten voor
              particulieren en bedrijven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard
              title="Zakelijke dienstverlening"
              description="Wij nemen de verwerking van al uw in- en verkoopfacturen uit handen, evenals het inboeken van uw kas- en banktransacties. Ook debiteurenbeheer kunt u geheel of gedeeltelijk aan ons uitbesteden."
              imageSrc="/img/finadm.png"
              href="/diensten/particulier"
            />

            <ServiceCard
              title="Particuliere dienstverlening"
              description="Wij begeleiden startende ondernemers bij het opzetten en voeren van een financieel overzichtelijke onderneming."
              imageSrc="/img/startersbegeleiding.png"
              href="/diensten/zakelijk"
            />

            <ServiceCard
              title="Bewindvoering"
              description="Verkopen is een noodzaak, maar goed factureren en zorgen dat het geld binnenkomt is zeker zo belangrijk. U kunt het debiteurenbeheer gedeeltelijk of volledig uit handen geven aan ons."
              imageSrc="/img/bewindvoering.png"
              href="/diensten/zakelijk"
            />

            <ServiceCard
              title="Begeleiding"
              description="Verkopen is een noodzaak, maar goed factureren en zorgen dat het geld binnenkomt is zeker zo belangrijk. U kunt het debiteurenbeheer gedeeltelijk of volledig uit handen geven aan ons."
              imageSrc="/img/bewindvoering.png"
              href="/diensten/zakelijk"
            />
          </div>
        </div>
      </section>

      <hr className="border: none; height: 0.5px; margin: 1rem 0;" />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <div className="relative h-[550px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/img/finadmfis.png"
                  alt="Over Financieel Evenwicht"
                  fill
                  className="object-cover"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Over Financieel & Fiscaal Evenwicht
              </h2>
              <p className="text-lg mb-4 text-justify">
                Sinds 2008 zetten wij ons met veel passie en plezier in voor
                particulieren, zzp'ers en mkb-bedrijven. Oprichtster Margriet
                Doornbosch combineert haar jarenlange ervaring in de
                bankenwereld met haar kennis vanuit het werken als begeleider.
              </p>
              <p className="text-lg mb-6 text-justify">
                Wij geloven in persoonlijk contact, wederzijds respect en
                vertrouwen. Of u nu een startende ondernemer bent of behoefte
                heeft aan financieel zorgbeheer, wij nemen u zoveel mogelijk
                werk uit handen.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/over">
                  Meer over ons <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <hr className="border: none; height: 0.5px; margin: 1rem 0;" />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om uw financiën op orde te brengen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvend gesprek!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Opnemen</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
