import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">HotelName</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/rooms">Rooms</Link>
        </li>
        <li>
          <Link href="/amenities">Amenities</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
