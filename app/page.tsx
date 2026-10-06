import CtaBand from "@/components/cta-band"
import Hero from "@/components/hero"
import HomeAbout from "@/components/home-about"
import HomeServices from "@/components/home-services"

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeAbout />
      <CtaBand
        title="Klaar om uw financiën op orde te brengen?"
        text="Neem vandaag nog contact op voor een vrijblijvend gesprek."
        href="/contact"
        label="Contact opnemen"
      />
    </>
  )
}
