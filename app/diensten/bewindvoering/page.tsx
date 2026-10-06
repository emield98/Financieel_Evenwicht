import InfoGrid from "@/components/info-grid"
import PointList from "@/components/point-list"
import ServicePage from "@/components/service-page"
import Link from "next/link"

const approach = [
  {
    title: "Persoonlijke aandacht",
    text: "We nemen de tijd om uw situatie te begrijpen en bieden een aanpak die is afgestemd op uw specifieke behoeften.",
  },
  {
    title: "Transparantie",
    text: "We werken met duidelijke afspraken en heldere communicatie. U weet precies wat we doen en waarom.",
  },
  {
    title: "Deskundigheid",
    text: "We hebben jarenlange ervaring in financiële zorgbeheer en beschikken over de benodigde kennis en certificeringen.",
  },
  {
    title: "Continuïteit",
    text: "We zorgen voor continuïteit in de financiële administratie, ook als de situatie verandert.",
  },
]

export default function Bewindvoering() {
  return (
    <ServicePage
      title="Bewindvoering"
      crumb="Bewindvoering"
      image="/img/finadmfis.png"
      imageAlt="Bewindvoering"
      asideTitle="Persoonlijk gesprek"
      asideText="Wilt u weten wat wij voor u of uw naasten kunnen betekenen? Neem contact op voor een vrijblijvend gesprek."
      exclude="/diensten/bewindvoering"
    >
      <p>
        Soms lukt het door lichamelijke of psychische omstandigheden niet (meer) om zelf de financiën goed te beheren.
        Rekeningen blijven liggen, geld is sneller op dan verwacht, of er is simpelweg geen overzicht meer. In zulke
        gevallen kan bewindvoering of budgetcoaching uitkomst bieden.
      </p>

      <h2>Wat is bewindvoering?</h2>
      <p>
        Bewindvoering betekent dat wij het beheer van uw geld en goederen overnemen, met toestemming van de
        kantonrechter. Dit is bedoeld om u te beschermen tegen financiële problemen en om rust en stabiliteit te brengen
        in uw situatie.
      </p>
      <p>Als bewindvoerder zorgen wij onder andere voor:</p>
      <PointList
        items={[
          "Het betalen van uw vaste lasten",
          "Het beheren van uw bankrekeningen",
          "Het aanvragen van toeslagen en uitkeringen",
          "Het aflossen van schulden (indien mogelijk)",
          "Het opstellen van een overzichtelijk budgetplan",
        ]}
      />
      <p>
        U ontvangt leefgeld op een aparte rekening voor uw dagelijkse uitgaven. Wij blijven altijd in overleg met u,
        zodat u goed begrijpt wat er gebeurt met uw geld.
      </p>

      <h2>Onze Aanpak</h2>
      <InfoGrid items={approach} />

      <p>
        Heeft u vragen over mijn diensten voor bewindvoering? Neem dan <Link href="/contact">contact</Link> met mij op
        voor een vrijblijvend gesprek. We denken graag met u mee over de beste oplossing voor uw situatie.
      </p>
    </ServicePage>
  )
}
