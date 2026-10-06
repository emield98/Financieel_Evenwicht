import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="page-intro">
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
