"use client";

import Image from "next/image";
import BookingButton from "./BookingButton";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Azure Haven Hotel Hero"
        fill
        className="object-cover"
        loading="eager"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          Welcome to Azure Haven Hotel
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 animate-fade-in delay-150">
          Experience luxury and comfort at the heart of the city.
        </p>
        <BookingButton />
      </div>
    </section>
  );
}
