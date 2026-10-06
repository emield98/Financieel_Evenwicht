import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import PointList from "@/components/point-list"
import ServicePage from "@/components/service-page"
import Link from "next/link"

export default function ParticuliereDienstverlening() {
  return (
    <ServicePage
      title="Particuliere dienstverlening"
      crumb="Particuliere dienstverlening"
      image="/img/margriet.png"
      imageAlt="Particuliere dienstverlening"
      asideTitle="Persoonlijk advies"
      asideText="Wilt u weten wat ik voor u kan betekenen? Neem contact op voor een vrijblijvend gesprek."
      exclude="/diensten/particulier"
    >
      <p>
        Wij helpen u graag bij uw belastingaangifte en uiteenlopende financiële vragen. Daarnaast bieden we persoonlijke
        begeleiding wanneer u er alleen even niet uitkomt, zowel op financieel vlak als daarbuiten. Met een combinatie
        van vakkennis en oprechte aandacht staan we naast u tijdens lastige periodes en op belangrijke momenten in uw
        leven.
      </p>

      <h2>Onze Diensten</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Financiële begeleiding</AccordionTrigger>
          <AccordionContent>
            <p>
              Wij bieden hulp bij uiteenlopende financiële vraagstukken en persoonlijke begeleiding bij belangrijke
              levensgebeurtenissen.
            </p>
            <p>U kunt onder andere bij ons terecht voor:</p>
            <PointList
              items={[
                "Belastingaangifte",
                "Overlijdensaangifte",
                "Successie- en erfbelastingaangifte",
                "Ondersteuning als executeur of bij de afwikkeling van een nalatenschap",
                "Ondersteuning bij schenkingen",
                "Financiële begeleiding bij echtscheiding",
                "Berekenen en aanvragen van toeslagen",
                "Opmaken van bezwaarschriften",
                "Aanvragen van uitkeringen",
              ]}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Individuele begeleiding</AccordionTrigger>
          <AccordionContent>
            <p>
              Naast financiële begeleiding bieden wij persoonlijke begeleiding die volledig aansluit op uw wensen en
              behoeften. Deze begeleiding kan zich richten op diverse gebieden; denk hierbij aan praktische of emotionele
              ondersteuning in het dagelijkse leven, al dan niet in combinatie met uw geldzaken. Dankzij onze ruime
              ervaring en de juiste diploma&apos;s bieden wij gespecialiseerde hulp aan:
            </p>
            <PointList
              items={[
                "Mensen met niet-aangeboren hersenletsel (NAH)",
                "Ouderen die door leeftijd of gezondheid moeite hebben met het regelen van praktische zaken",
                "Mensen die behoefte hebben aan rust, overzicht of een vertrouwd aanspreekpunt bij levensveranderingen",
              ]}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p>
        Staat uw hulpvraag er niet bij? Geen probleem! Neem gerust <Link href="/contact">contact</Link> met ons op. We
        luisteren graag naar uw verhaal en kijken samen wat we voor u kunnen betekenen.
      </p>
    </ServicePage>
  )
}
