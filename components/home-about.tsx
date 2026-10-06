import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import MediaFrame from "@/components/media-frame"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="section section--paper">
      <div className="wrap about-grid">
        <MediaFrame src="/img/finadmfis.png" alt="Over Financieel Evenwicht" />
        <div>
          <Heading eyebrow="Over ons" title="Over Financieel & Fiscaal Evenwicht" />
          <p className="lede">
            Sinds 2008 zetten wij ons met veel passie en plezier in voor particulieren, zzp&apos;ers en mkb-bedrijven.
            Oprichtster Margriet Doornbosch combineert haar jarenlange ervaring in de bankenwereld met haar kennis
            vanuit het werken als begeleider.
          </p>
          <p className="lede">
            Wij geloven in persoonlijk contact, wederzijds respect en vertrouwen. Of u nu een startende ondernemer bent
            of behoefte heeft aan financieel zorgbeheer, wij nemen u zoveel mogelijk werk uit handen.
          </p>
          <div className="actions">
            <Button asChild>
              <Link href="/over">
                Meer over ons
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
