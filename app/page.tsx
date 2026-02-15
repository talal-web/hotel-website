import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Featured Rooms</h2>
        {/* Map RoomCard components here */}
      </section>
    </>
  );
}
