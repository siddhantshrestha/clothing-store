import HeroAvailablePage from "./component/heropage/hero-availabiility-page"
import HeroSection from "./component/heropage/hero-section"
import NewArrivalHeroPage from "./component/heropage/new-arrival-hero-page"
import RecommendHeroPage from "./component/heropage/recommend-hero-page"
import ShopWithUsHeroPage from "./component/heropage/shop-with-us-heropage"

export default function Home() {
  return (
    <main className='mx-auto mt-24 px-12'>
      <HeroSection />
      <HeroAvailablePage />
      <NewArrivalHeroPage />
      <RecommendHeroPage />
      <ShopWithUsHeroPage />
    </main>
  )
}
