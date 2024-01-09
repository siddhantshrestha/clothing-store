import HeroAvailablePage from "./component/hero-availabiility-page"
import HeroSection from "./component/hero-section"
import NewArrivalHeroPage from "./component/new-arrival-hero-page"
import RecommendHeroPage from "./component/recommend-hero-page"

export default function Home() {
  return (
    <main className='mx-auto mt-24 px-12'>
      <HeroSection />
      <HeroAvailablePage />
      <NewArrivalHeroPage />
      <RecommendHeroPage />
    </main>
  )
}
