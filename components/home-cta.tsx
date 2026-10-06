import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomeCta() {
  return (
    <section className="border-t-2 border-primary bg-[#f7f4f2]">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Klaar om uw financiën op orde te brengen?
        </h2>
        <span className="mx-auto mt-5 block h-px w-12 bg-primary" aria-hidden="true" />
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Neem vandaag nog contact op voor een vrijblijvend gesprek.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">Contact opnemen</Link>
        </Button>
      </div>
    </section>
  )
}
