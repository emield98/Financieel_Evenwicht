import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ParticuliereDienstverlening() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Particuliere dienstverlening</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:underline text-white">
              Diensten
            </Link>
            <span className="mx-2">/</span>
            <span>Particuliere dienstverlening</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg mb-8">
                Bij Financieel en Fiscaal Evenwicht ondersteun ik particulieren met uiteenlopende financiële
                vraagstukken. Van belastingaangiften en toeslagen tot begeleiding bij belangrijke levensgebeurtenissen
                zoals een scheiding. Mijn persoonlijke aanpak zorgt ervoor dat u overzicht houdt en zich geen zorgen
                hoeft te maken over complexe administratieve zaken.
              </p>

              <h2 className="text-3xl font-bold mb-6">Onze Diensten</h2>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Aangifte inkomstenbelasting</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Wij verzorgen uw jaarlijkse belastingaangifte met zorg en aandacht voor detail. Onze experts
                      zorgen ervoor dat u optimaal gebruik maakt van alle aftrekposten en regelingen die voor u van
                      toepassing zijn.
                    </p>
                    <p>
                      We houden rekening met uw persoonlijke situatie, zoals hypotheekrenteaftrek, zorgkosten,
                      studiekosten en giften. Ook controleren we of u recht heeft op toeslagen en heffingskortingen.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Toeslagen en heffingskortingen</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Het Nederlandse toeslagensysteem kan complex zijn. Wij helpen u bij het aanvragen en beheren van
                      toeslagen zoals huurtoeslag, zorgtoeslag, kinderopvangtoeslag en kindgebonden budget.
                    </p>
                    <p>
                      Daarnaast zorgen we ervoor dat u optimaal gebruik maakt van alle heffingskortingen waar u recht op
                      heeft, zoals de algemene heffingskorting, arbeidskorting en inkomensafhankelijke
                      combinatiekorting.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Bezwaarschriften</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Bent u het niet eens met een beslissing van de Belastingdienst of een andere overheidsinstantie?
                      Wij helpen u bij het opstellen en indienen van een bezwaarschrift.
                    </p>
                    <p>
                      Onze experts beoordelen uw situatie, verzamelen de benodigde bewijsstukken en stellen een
                      overtuigend bezwaarschrift op. We begeleiden u door het hele proces en vertegenwoordigen u indien
                      nodig bij hoorzittingen.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Uitkeringen</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Wij bieden ondersteuning bij het aanvragen en beheren van verschillende soorten uitkeringen, zoals
                      WW, WIA, Wajong en bijstand. We helpen u bij het invullen van formulieren, het verzamelen van
                      bewijsstukken en het communiceren met uitkeringsinstanties.
                    </p>
                    <p>
                      Ook adviseren we u over de fiscale gevolgen van uw uitkering en hoe deze van invloed kan zijn op
                      andere inkomsten en toeslagen.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Financiële begeleiding bij echtscheiding</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Een echtscheiding heeft grote financiële gevolgen. Wij bieden begeleiding bij het in kaart brengen
                      van uw financiële situatie, het verdelen van bezittingen en schulden, en het regelen van
                      alimentatie.
                    </p>
                    <p className="mb-4">
                      We helpen u bij het opstellen van een financieel plan voor na de scheiding, inclusief budgettering
                      en belastingplanning. Ook begeleiden we u bij het aanpassen van uw belastingaangifte en toeslagen
                      aan uw nieuwe situatie.
                    </p>
                    <p>
                      Onze aanpak is discreet, empathisch en gericht op het vinden van praktische oplossingen in deze
                      moeilijke periode.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <p className="text-lg">
                Ik sta klaar om u op een professionele en persoonlijke manier te helpen met al uw financiële zaken. Neem
                vandaag nog{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact
                </Link>{" "}
                met mij op voor meer informatie of een vrijblijvend adviesgesprek.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="/img/margriet.png" alt="Particuliere dienstverlening" fill className="object-cover" />
                </div>

                <div className="bg-primary/70 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Persoonlijk advies</h3>
                  <p className="mb-6">
                    Wilt u weten wat ik voor u kan betekenen? Neem contact op voor een vrijblijvend gesprek.
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Financiële zorgbeheer</h3>
              <p className="mb-6">
                Onze specialiteit ligt in financiële zorgbeheer, waaronder ouderenadministratie en beschermingsbewind.
                We hebben ruime ervaring in de financiële begeleiding van cliënten met specifieke zorgbehoeften.
              </p>
              <Button asChild variant="outline">
                <Link href="/diensten/zorgbeheer">
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
