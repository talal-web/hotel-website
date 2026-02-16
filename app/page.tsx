import HeroSection from "../components/HeroSection";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="p-8">
        <Gallery />
        <Amenities />
      </section>
    </>
  );
}
