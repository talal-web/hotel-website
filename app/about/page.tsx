import Image from "next/image";
import BookingButton from "@/components/BookingButton";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px]">
        <Image
          src="/images/about-hero.jpg"
          alt="About Azure Haven Hotel"
          fill
          priority
          loading="eager"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About Azure Haven Hotel
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Azure Haven Hotel was founded with a vision to redefine luxury
            hospitality. Located in the heart of the city, we combine modern
            elegance with timeless comfort to create unforgettable experiences.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From our carefully designed rooms to our world-class amenities,
            every detail is crafted to ensure your stay is exceptional.
          </p>
        </div>

        <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-story.jpg"
            alt="Hotel interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Luxury Rooms</h3>
              <p className="text-gray-600">
                Spacious and beautifully designed rooms equipped with modern
                amenities for ultimate comfort.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
              <p className="text-gray-600">
                Located in the city center, providing easy access to major
                attractions and business hubs.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Exceptional Service
              </h3>
              <p className="text-gray-600">
                Our dedicated staff ensures personalized service to make your
                stay memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Experience Luxury Like Never Before
        </h2>
        <BookingButton />
      </section>
    </main>
  );
}
