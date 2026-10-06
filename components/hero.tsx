import { Button } from "@/components/ui/button"
import { Source_Serif_4 } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-serif",
  display: "swap",
})

export default function Hero() {
  return (
    <section className={`${sourceSerif.variable} hero`}>
      <div className="grid lg:h-[38rem] lg:grid-cols-[9fr_11fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:py-12 lg:pl-28 lg:pr-16 xl:pl-32">
          <p className="eyebrow">Sinds 2008</p>
          <span className="rule" aria-hidden="true" />
          <h1 className="mt-5 max-w-lg font-source text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Financieel & Fiscaal Evenwicht
          </h1>
          <p className="mt-5 max-w-md font-source text-lg leading-relaxed text-foreground/75">
            Voor betrouwbare financiële en fiscale ondersteuning. Wij helpen u met uw administratie,
            belastingaangiften en financieel zorgbeheer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/diensten">Onze diensten</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/25 bg-transparent text-primary hover:bg-primary/5 hover:text-primary">
              <Link href="/contact">Contact opnemen</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-72 sm:h-96 lg:h-full">
          <Image
            src="/img/margriet.png"
            alt="Margriet Doornbosch van Financieel & Fiscaal Evenwicht"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--cream)] to-transparent lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-[var(--cream)] to-transparent lg:block" />
        </div>
      </div>
    </section>
  )
}
