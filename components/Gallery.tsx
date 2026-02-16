"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "react-modal";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: "/images/gallery1.jpg", alt: "Lobby view" },
  { src: "/images/gallery2.jpg", alt: "Deluxe room" },
  { src: "/images/gallery3.jpg", alt: "Swimming pool" },
  { src: "/images/gallery4.jpg", alt: "Restaurant" },
  { src: "/images/gallery5.jpg", alt: "Spa" },
  { src: "/images/gallery6.jpg", alt: "Gym" },
];

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<GalleryImage | null>(null);

  // Only set modal root once on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("#root"); // use the new container instead of body
    }
  }, []);

  const openModal = (img: GalleryImage) => {
    setCurrentImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => openModal(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentImg && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="relative w-full max-w-4xl mx-auto my-8 bg-white p-4 rounded shadow-lg outline-none"
          overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 overflow-auto"
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-2xl"
          >
            &times;
          </button>

          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
            <Image
              src={currentImg.src}
              alt={currentImg.alt}
              fill
              className="object-cover rounded"
            />
          </div>

          <p className="mt-4 text-center text-gray-700">{currentImg.alt}</p>
        </Modal>
      )}
    </section>
  );
}
