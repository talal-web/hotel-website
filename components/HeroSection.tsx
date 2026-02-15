import BookingButton from "./BookingButton";

export default function HeroSection() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to HotelName</h1>
        <p className="mb-6">
          Experience luxury and comfort at the heart of the city.
        </p>
        <BookingButton />
      </div>
    </section>
  );
}
