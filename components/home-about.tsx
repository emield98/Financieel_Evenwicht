import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="border-t-2 border-primary bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10 lg:py-20">
        <div className="relative h-72 overflow-hidden border border-[#e6dfdb] sm:h-96 lg:h-full lg:min-h-[24rem]">
          <Image
            src="/img/finadmfis.png"
            alt="Over Financieel Evenwicht"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Over ons</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Over Financieel & Fiscaal Evenwicht
          </h2>
          <span className="mt-5 block h-px w-12 bg-primary" aria-hidden="true" />
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Sinds 2008 zetten wij ons met veel passie en plezier in voor particulieren, zzp&apos;ers en
            mkb-bedrijven. Oprichtster Margriet Doornbosch combineert haar jarenlange ervaring in de
            bankenwereld met haar kennis vanuit het werken als begeleider.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Wij geloven in persoonlijk contact, wederzijds respect en vertrouwen. Of u nu een startende
            ondernemer bent of behoefte heeft aan financieel zorgbeheer, wij nemen u zoveel mogelijk werk
            uit handen.
          </p>
          <Button asChild className="mt-8">
            <Link href="/over">
              Meer over ons
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
