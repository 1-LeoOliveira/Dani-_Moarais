import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MusicaAgenda from "@/components/MusicaAgenda";
import Streaming from "@/components/Streaming";
import Videos from "@/components/Videos";
import Sobre from "@/components/Sobre";
import Galeria from "@/components/Galeria";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <MusicaAgenda />
      <Streaming />

      <Videos />

      <Sobre />

      <Galeria />

      <Contato />
      <Footer />

      <CookieBanner />
    </>
  );
}
