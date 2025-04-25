import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export default function FinancieleZorgbeheer() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Financiële zorgbeheer</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:underline text-white">
              Diensten
            </Link>
            <span className="mx-2">/</span>
            <span>Financiële zorgbeheer</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg mb-8">
                Mijn specialiteit ligt in financiële zorgbeheer, waaronder ouderenadministratie en beschermingsbewind.
                Ik heb ruime ervaring in de financiële begeleiding van cliënten, waaronder mensen die getroffen zijn
                door niet-aangeboren hersenletsel zoals MS, hersenbloeding, Parkinson of Alzheimer. Met mijn
                persoonlijke en empathische aanpak zorg ik ervoor dat de financiële zaken goed geregeld zijn, zodat u of
                uw naaste zich kan concentreren op wat echt belangrijk is.
              </p>

              <h2 className="text-3xl font-bold mb-6">Onze Diensten voor Financiële Zorgbeheer</h2>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Ouderenadministratie</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Naarmate we ouder worden, kan het beheren van de financiële administratie steeds lastiger worden.
                      Wij nemen deze zorg uit handen en zorgen ervoor dat alle financiële zaken goed geregeld zijn.
                    </p>
                    <p>
                      We verzorgen de dagelijkse administratie, betalen rekeningen, controleren inkomsten en uitgaven,
                      beheren verzekeringen, en zorgen voor de belastingaangifte. Ook houden we toezicht op toeslagen en
                      andere regelingen waar ouderen recht op hebben.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Beschermingsbewind</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Bij beschermingsbewind nemen wij, na benoeming door de rechter, het beheer van de financiën
                      volledig over. Dit is bedoeld voor mensen die door hun lichamelijke of geestelijke toestand niet
                      meer in staat zijn om hun financiële belangen te behartigen.
                    </p>
                    <p>
                      Als bewindvoerder zorgen we voor een verantwoord beheer van inkomsten, uitgaven en vermogen. We
                      stellen een budgetplan op, betalen vaste lasten, beheren schulden indien aanwezig, en leggen
                      jaarlijks verantwoording af aan de rechtbank.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Budgetbeheer</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Bij budgetbeheer helpen we mensen die moeite hebben met het beheren van hun financiën, maar wel
                      zelf beslissingen kunnen nemen. We stellen samen een budgetplan op en helpen bij het nakomen van
                      financiële verplichtingen.
                    </p>
                    <p>
                      We zorgen ervoor dat vaste lasten op tijd worden betaald, helpen bij het aflossen van eventuele
                      schulden, en werken toe naar een situatie waarin de cliënt weer zelfstandig de financiën kan
                      beheren.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Financiële begeleiding bij ziekte</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Bij ziekte, zoals niet-aangeboren hersenletsel, MS, Parkinson of Alzheimer, kan het beheren van
                      financiën een grote uitdaging worden. Wij bieden specialistische begeleiding die is afgestemd op
                      de specifieke behoeften van de cliënt.
                    </p>
                    <p>
                      We zorgen voor continuïteit in de financiële administratie, helpen bij het aanvragen van
                      voorzieningen en toeslagen, en ondersteunen bij het regelen van zorgverzekeringen en
                      zorgtoeslagen. Ook adviseren we over financiële planning voor de toekomst.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="text-3xl font-bold mb-6">Onze Aanpak</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Persoonlijke aandacht</h3>
                  </div>
                  <p>
                    We nemen de tijd om uw situatie te begrijpen en bieden een aanpak die is afgestemd op uw specifieke
                    behoeften.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Transparantie</h3>
                  </div>
                  <p>
                    We werken met duidelijke afspraken en heldere communicatie. U weet precies wat we doen en waarom.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Deskundigheid</h3>
                  </div>
                  <p>
                    We hebben jarenlange ervaring in financiële zorgbeheer en beschikken over de benodigde kennis en
                    certificeringen.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">Continuïteit</h3>
                  </div>
                  <p>We zorgen voor continuïteit in de financiële administratie, ook als de situatie verandert.</p>
                </div>
              </div>

              <p className="text-lg">
                Heeft u vragen over mijn diensten voor financiële zorgbeheer? Neem dan{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact
                </Link>{" "}
                met mij op voor een vrijblijvend gesprek. Ik denk graag met u mee over de beste oplossing voor uw
                situatie.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="/img/finadmfis.png" alt="Financiële zorgbeheer" fill className="object-cover" />
                </div>

                <div className="bg-primary/70 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Persoonlijk gesprek</h3>
                  <p className="mb-6">
                    Wilt u weten wat ik voor u of uw naaste kan betekenen? Neem contact op voor een vrijblijvend
                    gesprek.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Andere diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Particuliere dienstverlening</h3>
              <p className="mb-6">
                Bij Financieel en Fiscaal Evenwicht ondersteunen we particulieren met uiteenlopende financiële
                vraagstukken. Van belastingaangiften en toeslagen tot begeleiding bij belangrijke levensgebeurtenissen.
              </p>
              <Button asChild variant="outline">
                <Link href="/diensten/particulier">
                  Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Zakelijke dienstverlening</h3>
              <p className="mb-6">
                Voor ondernemers en bedrijven bieden wij complete financiële en fiscale ondersteuning. Van het bijhouden
                van uw administratie tot het verzorgen van uw belastingaangiften en jaarrekeningen.
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
  )
}
