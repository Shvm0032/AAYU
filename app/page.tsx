import HeroHome from "../components/Home/HeroHome"
import HomeBanner from "../components/Home/HomeBanner"
import HomeProduct from "../components/Home/HomeProduct"
import Marquee from "../components/Home/Marquee"
import HomeAboutUs from "../components/Home/HomeAboutUs"
import Testimonials from "../components/Home/Testimonials"
import Footer  from "../components/Footer"
import MobileHeader  from "../components/MobileHeader"
export default function Home() {
  return (
    <>
    <MobileHeader />
      <HeroHome />
      <HomeBanner />
      <HomeProduct />
      <Marquee />
      <HomeAboutUs />
      <Testimonials />
      <Footer  />
    </>
  );
}