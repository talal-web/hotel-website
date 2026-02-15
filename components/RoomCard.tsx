import BookingButton from "./BookingButton";

export default function RoomCard({ room }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={room.image}
        alt={room.name}
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
