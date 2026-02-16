import { FC, ReactNode } from "react";
import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaDumbbell,
  FaConciergeBell,
  FaSpa,
} from "react-icons/fa";

interface Amenity {
  icon: ReactNode;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: <FaWifi className="text-4xl text-blue-600" />,
    title: "Free Wi-Fi",
    description: "High-speed internet available in all rooms and common areas.",
  },
  {
    icon: <FaSwimmingPool className="text-4xl text-blue-600" />,
    title: "Swimming Pool",
    description: "Outdoor pool with lounge chairs and poolside service.",
  },
  {
    icon: <FaUtensils className="text-4xl text-blue-600" />,
    title: "Restaurant",
    description: "Gourmet dining with local and international cuisine.",
  },
  {
    icon: <FaDumbbell className="text-4xl text-blue-600" />,
    title: "Fitness Center",
    description: "Fully-equipped gym to keep up with your workouts.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-600" />,
    title: "24/7 Concierge",
    description:
      "Assistance anytime with bookings, tickets, or local guidance.",
  },
  {
    icon: <FaSpa className="text-4xl text-blue-600" />,
    title: "Spa & Wellness",
    description: "Relax with massages, sauna, and wellness treatments.",
  },
];

const Amenities: FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Our Amenities</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {amenity.title}
            </h3>
            <p className="text-gray-600 text-center">{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
