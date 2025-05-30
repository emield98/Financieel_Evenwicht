import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function bewindvoering() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Bewindvoering</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:underline text-white">
              Diensten
            </Link>
            <span className="mx-2">/</span>
            <span>Bewindvoering</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg mb-8">
                Soms lukt het door lichamelijke of psychische omstandigheden
                niet (meer) om zelf de financiën goed te beheren. Rekeningen
                blijven liggen, geld is sneller op dan verwacht, of er is
                simpelweg geen overzicht meer. In zulke gevallen kan
                bewindvoering of budgetcoaching uitkomst bieden.
              </p>

              <h2 className="text-3xl font-bold mb-6">Wat is bewindvoering?</h2>
              <p className="text-lg mb-8">
                Bewindvoering betekent dat wij het beheer van uw geld en
                goederen overnemen, met toestemming van de kantonrechter. Dit is
                bedoeld om u te beschermen tegen financiële problemen en om rust
                en stabiliteit te brengen in uw situatie.
              </p>
              <p className="text-lg mb-8">
                Als bewindvoerder zorgen wij onder andere voor:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  Het betalen van uw vaste lasten
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  Het beheren van uw bankrekeningen
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  Het aanvragen van toeslagen en uitkeringen
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  Het aflossen van schulden (indien mogelijk)
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  Het opstellen van een overzichtelijk budgetplan
                </li>
              </ul>

              <p className="text-lg mb-8 mt-8">
                U ontvangt leefgeld op een aparte rekening voor uw dagelijkse
                uitgaven. Wij blijven altijd in overleg met u, zodat u goed
                begrijpt wat er gebeurt met uw geld.
              </p>
              <h2 className="text-3xl font-bold mb-6">Onze Aanpak</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Persoonlijke aandacht</h3>
                  </div>
                  <p>
                    We nemen de tijd om uw situatie te begrijpen en bieden een
                    aanpak die is afgestemd op uw specifieke behoeften.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Transparantie</h3>
                  </div>
                  <p>
                    We werken met duidelijke afspraken en heldere communicatie.
                    U weet precies wat we doen en waarom.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Deskundigheid</h3>
                  </div>
                  <p>
                    We hebben jarenlange ervaring in financiële zorgbeheer en
                    beschikken over de benodigde kennis en certificeringen.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Continuïteit</h3>
                  </div>
                  <p>
                    We zorgen voor continuïteit in de financiële administratie,
                    ook als de situatie verandert.
                  </p>
                </div>
              </div>

              <p className="text-lg">
                Heeft u vragen over mijn diensten voor bewindvoering?
                Neem dan{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact
                </Link>{" "}
                met mij op voor een vrijblijvend gesprek. Ik denk graag met u
                mee over de beste oplossing voor uw situatie.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/img/finadmfis.png"
                    alt="bewindvoering"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="sm: bg-primary lg:bg-primary/70 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Persoonlijk gesprek
                  </h3>
                  <p className="mb-6">
                    Wilt u weten wat ik voor u of uw naaste kan betekenen? Neem
                    contact op voor een vrijblijvend gesprek.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/contact">
                      Contact Opnemen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Andere diensten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Particuliere dienstverlening
              </h3>
              <p className="mb-6">
                Bij Financieel en Fiscaal Evenwicht ondersteunen we
                particulieren met uiteenlopende financiële vraagstukken. Van
                belastingaangiften en toeslagen tot begeleiding bij belangrijke
                levensgebeurtenissen.
              </p>
              <Button asChild variant="outline">
                <Link href="/diensten/particulier">
                  Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Zakelijke dienstverlening
              </h3>
              <p className="mb-6">
                Voor ondernemers en bedrijven bieden wij complete financiële en
                fiscale ondersteuning. Van het bijhouden van uw administratie
                tot het verzorgen van uw belastingaangiften en jaarrekeningen.
              </p>
              <Button asChild variant="outline">
                <Link href="/diensten/zakelijk">
                  Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
