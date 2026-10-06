import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Metadata } from "next"
import InfoGrid from "@/components/info-grid"
import ServicePage from "@/components/service-page"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Zakelijke dienstverlening",
  description:
    "Administratie, btw- en inkomstenbelastingaangiften, jaarrekeningen, debiteurenbeheer en startersbegeleiding voor zzp'ers en mkb.",
}

const benefits = [
  {
    title: "Tijdsbesparing",
    text: "U kunt zich concentreren op uw kernactiviteiten terwijl wij uw administratie verzorgen.",
  },
  {
    title: "Kostenefficiënt",
    text: "Geen kosten voor dure boekhoudprogramma's en geen noodzaak voor een eigen administratief medewerker.",
  },
  {
    title: "Actueel inzicht",
    text: "U heeft altijd toegang tot actuele financiële informatie over uw onderneming.",
  },
  {
    title: "Fiscale optimalisatie",
    text: "We zorgen ervoor dat u optimaal gebruik maakt van fiscale regelingen en aftrekposten.",
  },
]

export default function ZakelijkeDienstverlening() {
  return (
    <ServicePage
      title="Zakelijke dienstverlening"
      crumb="Zakelijke dienstverlening"
      image="/img/card/zak_dienst.jpg"
      imageAlt="Zakelijke dienstverlening"
      asideTitle="Zakelijk advies"
      asideText="Wilt u weten wat wij voor uw onderneming kunnen betekenen? Neem contact op voor een vrijblijvend gesprek."
      exclude="/diensten/zakelijk"
    >
      <p>
        Voor ondernemers en bedrijven bieden wij complete financiële en fiscale ondersteuning. Van het bijhouden van uw
        administratie tot het verzorgen van uw belastingaangiften en jaarrekeningen. We zorgen ervoor dat u altijd
        inzicht heeft in uw financiële situatie en voldoet aan alle wettelijke verplichtingen.
      </p>

      <h2>Onze zakelijke diensten</h2>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Financiële administratie</AccordionTrigger>
          <AccordionContent>
            <p>
              Wij zorgen voor een overzichtelijke en correcte administratie van uw onderneming. We verwerken al uw in-
              en verkoopfacturen, kas- en bankboeken, en zorgen voor een gestructureerde boekhouding die voldoet aan
              alle wettelijke eisen.
            </p>
            <p>
              U kunt kiezen voor volledige uitbesteding of voor ondersteuning bij specifieke taken. We werken met
              moderne boekhoudprogramma&apos;s die u real-time inzicht geven in uw financiële situatie.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Belastingaangiften (BTW, IB)</AccordionTrigger>
          <AccordionContent>
            <p>
              Wij verzorgen alle belastingaangiften voor uw onderneming, waaronder BTW-aangiften, inkomstenbelasting
              voor zzp&apos;ers en vennootschapsbelasting voor BV&apos;s. We zorgen ervoor dat uw aangiften correct en
              op tijd worden ingediend.
            </p>
            <p>
              Daarnaast adviseren we u over fiscale optimalisatie en helpen we u bij het benutten van fiscale regelingen
              en aftrekposten die voor uw onderneming van toepassing zijn.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Jaarrekeningen</AccordionTrigger>
          <AccordionContent>
            <p>
              Wij stellen uw jaarrekening op volgens de geldende wet- en regelgeving. De jaarrekening geeft een helder
              overzicht van de financiële positie van uw onderneming en vormt de basis voor uw belastingaangifte.
            </p>
            <p>
              We analyseren de cijfers en bespreken deze met u, zodat u inzicht krijgt in de financiële prestaties van
              uw onderneming en kunt sturen op verbetering.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Debiteurenbeheer</AccordionTrigger>
          <AccordionContent>
            <p>
              Verkopen is een noodzaak, maar goed factureren en zorgen dat het geld binnenkomt is zeker zo belangrijk. U
              kunt het debiteurenbeheer gedeeltelijk of volledig uit handen geven aan ons.
            </p>
            <p>
              We zorgen voor tijdige facturatie, bewaken de betalingstermijnen, sturen herinneringen en aanmaningen, en
              ondernemen indien nodig verdere stappen om uw vorderingen te innen. Zo verbetert uw cashflow en kunt u
              zich concentreren op uw kernactiviteiten.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Startersbegeleiding</AccordionTrigger>
          <AccordionContent>
            <p>
              Wij begeleiden startende ondernemers bij het opzetten en voeren van een financieel overzichtelijke
              onderneming. We adviseren u over de meest geschikte rechtsvorm, helpen bij het opstellen van een
              ondernemingsplan en financiële prognoses, en zorgen voor de juiste registraties bij de Kamer van Koophandel
              en Belastingdienst.
            </p>
            <p>
              Daarnaast helpen we u bij het opzetten van een efficiënte administratie en adviseren we over fiscale
              regelingen voor starters. Zo kunt u met vertrouwen aan uw onderneming beginnen.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2>Voordelen van onze zakelijke dienstverlening</h2>
      <InfoGrid items={benefits} />

      <p>
        Wilt u meer weten over onze zakelijke dienstverlening? Neem dan <Link href="/contact">contact</Link> op voor een
        vrijblijvend gesprek. We denken graag met u mee over de beste oplossing voor uw onderneming.
      </p>
    </ServicePage>
  )
}
