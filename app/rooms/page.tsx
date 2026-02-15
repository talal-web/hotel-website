import RoomCard from "@/components/RoomCard";

const rooms = [
  {
    name: "Deluxe Room",
    description: "Comfortable room with sea view",
    price: 120,
    image: "/images/room1.jpg",
  },
  {
    name: "Suite",
    description: "Spacious suite with lounge",
    price: 250,
    image: "/images/room2.jpg",
  },
];

export default function Rooms() {
  return (
    <>
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-6">Our Rooms</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((room, idx) => (
            <RoomCard key={idx} room={room} />
          ))}
        </div>
      </section>
    </>
  );
}
