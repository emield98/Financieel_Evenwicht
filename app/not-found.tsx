import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
}

export default function NotFound() {
  return (
    <section className="page-intro page-intro--fill">
      <div className="wrap wrap--narrow wrap--tight center">
        <Heading align="center" as="h1" eyebrow="Pagina" title="404" intro="Deze pagina bestaat niet (meer)." />
        <div className="actions actions--center">
          <Button asChild>
            <Link href="/">Ga terug naar home</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
