import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PaperTear from "@/components/PaperTear";
import Ticker from "@/components/Ticker";
import ShowAbout from "@/components/ShowAbout";
import Timeline from "@/components/Timeline";
import Discografia from "@/components/Discografia";
import Stats from "@/components/Stats";
import ShowsGallery from "@/components/ShowsGallery";
import Feats from "@/components/Feats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <PaperTear />

      <Ticker />

      <ShowAbout />

      <PaperTear flip />
      <Timeline />
      <PaperTear pathFlip />

      <Discografia />

      <Stats />

      <ShowsGallery />

      <PaperTear flip />
      <Feats />
      <PaperTear pathFlip />

      <Contact />

      <Footer />
    </>
  );
}
