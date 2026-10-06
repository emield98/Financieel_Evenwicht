import ContactPanel from "@/components/contact-panel"
import InfoGrid from "@/components/info-grid"
import MediaFrame from "@/components/media-frame"
import PageHeader from "@/components/page-header"
import PointList from "@/components/point-list"
import Section from "@/components/section"

const values = [
  {
    title: "Persoonlijk contact",
    text: "We nemen de tijd voor u en bouwen aan een vertrouwensband.",
  },
  {
    title: "Wederzijds respect",
    text: "Iedereen verdient begeleiding zonder oordeel.",
  },
  {
    title: "Verantwoordelijkheid en integriteit",
    text: "We gaan zorgvuldig om met wat u ons toevertrouwt.",
  },
  {
    title: "Humor waar het kan, helderheid waar het moet",
    text: "We maken zaken begrijpelijk en toegankelijk.",
  },
  {
    title: "Stimuleren van zelfstandigheid",
    text: "Waar mogelijk helpen we u om zelf de regie (terug) te nemen.",
  },
]

export default function OverOns() {
  return (
    <>
      <PageHeader
        eyebrow="Over ons"
        title="Over Financieel & Fiscaal Evenwicht"
        crumbs={[{ href: "/", label: "Home" }, { label: "Over ons" }]}
      />

      <Section>
        <div className="split">
          <div className="copy">
            <blockquote className="pullquote">Betrokken, betrouwbaar en mensgericht</blockquote>
            <h2>Mijn Achtergrond</h2>
            <p>
              Sinds 2008 biedt Financieel en Fiscaal Evenwicht ondersteuning aan particulieren, zzp’ers en mkb’ers.
              Oprichtster Margriet Doornbosch combineert meer dan 16 jaar ervaring bij ABN AMRO met kennis uit de
              praktijk. Deze brede achtergrond maakt het mogelijk om klanten zowel financieel als persoonlijk te
              begeleiden.
            </p>
            <p>
              Van belastingaangifte tot beschermingsbewind: wij geloven in maatwerk, duidelijke communicatie en een
              menselijke benadering. U staat centraal, niet de cijfers. Dat betekent dat we altijd goed luisteren,
              samen doelen opstellen en begeleiding bieden die aansluit bij uw situatie en wensen.
            </p>
            <p>
              We hebben ruime ervaring in het ondersteunen van mensen met niet-aangeboren hersenletsel (zoals MS,
              Parkinson of een hersenbloeding), ouderen die moeite hebben met administratie, en cliënten die tijdelijk
              of langdurig behoefte hebben aan bescherming van hun financiën. Waar nodig schakelen we ook het sociale
              netwerk in en stimuleren we het behoud van eigen regie.
            </p>

            <h2>Onze kernwaarden</h2>
            <p>Wij bieden een breed scala aan financiële en fiscale diensten voor particulieren en bedrijven.</p>
            <InfoGrid items={values} />

            <h2>Heldere gedragsregels</h2>
            <p>Om een veilige, prettige en professionele samenwerking te waarborgen, hanteren wij een gedragscode. Deze omvat onder andere:</p>
            <PointList
              items={[
                "Respectvolle omgang met elkaar, ongeacht achtergrond of overtuiging",
                "Geen ruimte voor discriminatie, intimidatie of grensoverschrijdend gedrag",
                "Geen gebruik van alcohol of drugs tijdens begeleiding",
                "Rookvrij beleid, tenzij uitdrukkelijk anders afgesproken",
              ]}
            />
            <p>
              Deze richtlijnen gelden zowel voor ons als voor onze cliënten. Zo creëren we een veilige en respectvolle
              werkomgeving voor iedereen.
            </p>
          </div>

          <aside className="split__aside">
            <MediaFrame className="media--tall" src="/img/finadmfis.png" alt="Financieel Evenwicht" />
            <ContactPanel
              title="Neem contact op"
              text="Heeft u vragen of wilt u een afspraak maken? Neem gerust contact op."
            />
          </aside>
        </div>
      </Section>
    </>
  )
}
