import Hero from "@/components/hero"
import HomeAbout from "@/components/home-about"
import HomeCta from "@/components/home-cta"
import HomeServices from "@/components/home-services"

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeAbout />
      <HomeCta />
    </>
  )
}
