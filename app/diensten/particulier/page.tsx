import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Item } from "@radix-ui/react-navigation-menu";

export default function ParticuliereDienstverlening() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Particuliere dienstverlening
          </h1>
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
                Wij helpen u graag bij uw financiële vragen en bieden
                persoonlijke begeleiding wanneer het even niet alleen lukt. Bij
                ons kunt u terecht voor ondersteuning in verschillende
                levenssituaties — of het nu om financiële zaken gaat of om
                bredere, persoonlijke begeleiding. Met een combinatie van
                vakkennis en oprechte aandacht staan we naast u in lastige
                periodes en belangrijke momenten.
              </p>

              <h2 className="text-3xl font-bold mb-6">Onze Diensten</h2>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Financiële begeleiding</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Wij bieden hulp bij uiteenlopende financiële vraagstukken.
                      U kunt onder andere bij ons terecht voor:
                      <Item>Belastingaangifte</Item>
                      <Item>Overlijdensaangifte</Item>
                      <Item>Successieaangifte</Item>
                      <Item>Ondersteuning bij schenkingen</Item>
                      <Item>Financiële begeleiding bij echtscheiding</Item>
                      <Item>Berekenen en aanvragen van toeslagen</Item>
                      <Item>Opmaken van bezwaarschriften</Item>
                      <Item>Aanvragen van uitkeringen</Item>
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Individuele begeleiding</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Naast financiële ondersteuning bieden wij ook persoonlijke
                      begeleiding — soms in combinatie met geldzaken, soms puur
                      op emotioneel of praktisch vlak. Deze begeleiding wordt
                      verzorgd door een professional met een diploma in social
                      work en ruime ervaring in het werken met:
                      <Item>Mensen met niet-aangeboren hersenletsel (NAH)</Item>
                      <Item>
                        Ouderen die door leeftijd of gezondheid moeite hebben
                        met het regelen van praktische zaken
                      </Item>
                      <Item>
                        Mensen die behoefte hebben aan rust, overzicht of een
                        vertrouwd aanspreekpunt bij levensveranderingen
                      </Item>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <p className="text-lg">
                Staat uw hulpvraag er niet bij? Geen probleem! Neem gerust{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact
                </Link>{" "}
                met ons op — we luisteren graag naar uw verhaal en kijken samen
                wat we voor u kunnen betekenen.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/img/margriet.png"
                    alt="Particuliere dienstverlening"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="sm: bg-primary lg:bg-primary/70 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Persoonlijk advies</h3>
                  <p className="mb-6">
                    Wilt u weten wat ik voor u kan betekenen? Neem contact op
                    voor een vrijblijvend gesprek.
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Financiële zorgbeheer</h3>
              <p className="mb-6">
                Onze specialiteit ligt in financiële zorgbeheer, waaronder
                ouderenadministratie en beschermingsbewind. We hebben ruime
                ervaring in de financiële begeleiding van cliënten met
                specifieke zorgbehoeften.
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
  );
}
