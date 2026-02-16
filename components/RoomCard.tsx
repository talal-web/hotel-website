import Image from "next/image";
import BookingButton from "./BookingButton";

interface Room {
  image: string;
  name: string;
  description: string;
  price: number;
}

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={room.image}
        alt={room.name}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{room.name}</h2>
        <p className="text-gray-700">{room.description}</p>
        <p className="mt-2 font-semibold">${room.price}/night</p>
        <BookingButton />
      </div>
    </div>
  );
}
