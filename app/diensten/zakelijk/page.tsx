import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ZakelijkeDienstverlening() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Zakelijke dienstverlening</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:underline text-white">
              Diensten
            </Link>
            <span className="mx-2">/</span>
            <span>Zakelijke dienstverlening</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg mb-8">
                Voor ondernemers en bedrijven bied ik complete financiële en fiscale ondersteuning. Van het bijhouden
                van uw administratie tot het verzorgen van uw belastingaangiften en jaarrekeningen. Ik zorg ervoor dat u
                altijd inzicht heeft in uw financiële situatie en voldoet aan alle wettelijke verplichtingen.
              </p>

              <h2 className="text-3xl font-bold mb-6">Onze Zakelijke Diensten</h2>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Financiële administratie</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Wij zorgen voor een overzichtelijke en correcte administratie van uw onderneming. We verwerken al
                      uw in- en verkoopfacturen, kas- en bankboeken, en zorgen voor een gestructureerde boekhouding die
                      voldoet aan alle wettelijke eisen.
                    </p>
                    <p>
                      U kunt kiezen voor volledige uitbesteding of voor ondersteuning bij specifieke taken. We werken
                      met moderne boekhoudprogramma's die u real-time inzicht geven in uw financiële situatie.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Belastingaangiften (BTW, IB)</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Wij verzorgen alle belastingaangiften voor uw onderneming, waaronder BTW-aangiften,
                      inkomstenbelasting voor zzp'ers en vennootschapsbelasting voor BV's. We zorgen ervoor dat uw
                      aangiften correct en op tijd worden ingediend.
                    </p>
                    <p>
                      Daarnaast adviseren we u over fiscale optimalisatie en helpen we u bij het benutten van fiscale
                      regelingen en aftrekposten die voor uw onderneming van toepassing zijn.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Jaarrekeningen</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Wij stellen uw jaarrekening op volgens de geldende wet- en regelgeving. De jaarrekening geeft een
                      helder overzicht van de financiële positie van uw onderneming en vormt de basis voor uw
                      belastingaangifte.
                    </p>
                    <p>
                      We analyseren de cijfers en bespreken deze met u, zodat u inzicht krijgt in de financiële
                      prestaties van uw onderneming en kunt sturen op verbetering.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Debiteurenbeheer</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Verkopen is een noodzaak, maar goed factureren en zorgen dat het geld binnenkomt is zeker zo
                      belangrijk. U kunt het debiteurenbeheer gedeeltelijk of volledig uit handen geven aan ons.
                    </p>
                    <p>
                      We zorgen voor tijdige facturatie, bewaken de betalingstermijnen, sturen herinneringen en
                      aanmaningen, en ondernemen indien nodig verdere stappen om uw vorderingen te innen. Zo verbetert
                      uw cashflow en kunt u zich concentreren op uw kernactiviteiten.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Startersbegeleiding</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Wij begeleiden startende ondernemers bij het opzetten en voeren van een financieel overzichtelijke
                      onderneming. We adviseren u over de meest geschikte rechtsvorm, helpen bij het opstellen van een
                      ondernemingsplan en financiële prognoses, en zorgen voor de juiste registraties bij de Kamer van
                      Koophandel en Belastingdienst.
                    </p>
                    <p>
                      Daarnaast helpen we u bij het opzetten van een efficiënte administratie en adviseren we over
                      fiscale regelingen voor starters. Zo kunt u met vertrouwen aan uw onderneming beginnen.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="text-3xl font-bold mb-6">Voordelen van onze zakelijke dienstverlening</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Tijdsbesparing</h3>
                    <p>U kunt zich concentreren op uw kernactiviteiten terwijl wij uw administratie verzorgen.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Kostenefficiënt</h3>
                    <p>
                      Geen kosten voor dure boekhoudprogramma's en geen noodzaak voor een eigen administratief
                      medewerker.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Actueel inzicht</h3>
                    <p>U heeft altijd toegang tot actuele financiële informatie over uw onderneming.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Fiscale optimalisatie</h3>
                    <p>We zorgen ervoor dat u optimaal gebruik maakt van fiscale regelingen en aftrekposten.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg">
                Wilt u meer weten over mijn zakelijke dienstverlening? Neem dan{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact
                </Link>{" "}
                met mij op voor een vrijblijvend gesprek. Ik denk graag met u mee over de beste oplossing voor uw
                onderneming.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="/img/finadm.png" alt="Zakelijke dienstverlening" fill className="object-cover" />
                </div>

                <div className="sm: bg-primary lg:bg-primary/70 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Zakelijk advies</h3>
                  <p className="mb-6">
                    Wilt u weten wat ik voor uw onderneming kan betekenen? Neem contact op voor een vrijblijvend
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
              <h3 className="text-xl font-bold mb-4">Bewindvoering</h3>
              <p className="mb-6">
                Soms lukt het niet (meer) om de eigen financiën goed te overzien. Bewindvoering of budgetcoaching kan in zulke situaties uitkomst bieden — we kijken samen met u wat het beste past bij uw persoonlijke situatie.
              </p>
              <Button asChild variant="outline">
                <Link href="/diensten/bewindvoering">
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
