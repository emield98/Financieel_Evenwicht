import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Diensten() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Onze Diensten</h1>
          <div className="flex items-center text-sm text-muted-foreground mt-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Diensten</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {/* Particuliere dienstverlening */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Particuliere dienstverlening</h2>
                <p className="text-lg mb-6">
                  Bij Financieel en Fiscaal Evenwicht ondersteunen we particulieren met uiteenlopende financiële
                  vraagstukken. Van belastingaangiften en toeslagen tot begeleiding bij belangrijke levensgebeurtenissen
                  zoals een scheiding. Onze persoonlijke aanpak zorgt ervoor dat u overzicht houdt en zich geen zorgen
                  hoeft te maken over complexe administratieve zaken.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Aangifte inkomstenbelasting</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Toeslagen en heffingskortingen</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Bezwaarschriften</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Uitkeringen</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Financiële begeleiding bij echtscheiding</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/diensten/particulier">
                    Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image src="/img/margriet.png" alt="Particuliere dienstverlening" fill className="object-cover" />
              </div>
            </div>

            <hr className="my-8" />

            {/* Zakelijke dienstverlening */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/img/finadm.png" alt="Zakelijke dienstverlening" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Zakelijke dienstverlening</h2>
                <p className="text-lg mb-6">
                  Voor ondernemers en bedrijven bieden wij complete financiële en fiscale ondersteuning. Van het
                  bijhouden van uw administratie tot het verzorgen van uw belastingaangiften en jaarrekeningen. Wij
                  zorgen ervoor dat u altijd inzicht heeft in uw financiële situatie en voldoet aan alle wettelijke
                  verplichtingen.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Financiële administratie</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Belastingaangiften (BTW, IB, VPB)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Jaarrekeningen</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Debiteurenbeheer</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Startersbegeleiding</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/diensten/zakelijk">
                    Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <hr className="my-8" />

            {/* Financiële zorgbeheer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Financiële zorgbeheer</h2>
                <p className="text-lg mb-6">
                  Onze specialiteit ligt in financiële zorgbeheer, waaronder ouderenadministratie en beschermingsbewind.
                  We hebben ruime ervaring in de financiële begeleiding van cliënten, waaronder mensen die getroffen
                  zijn door niet-aangeboren hersenletsel zoals MS, hersenbloeding, Parkinson of Alzheimer.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Ouderenadministratie</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Beschermingsbewind</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Budgetbeheer</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Financiële begeleiding bij ziekte</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/diensten/zorgbeheer">
                    Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image src="/img/finadmfis.png" alt="Financiële zorgbeheer" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om uw financiën op orde te brengen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Opnemen</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
