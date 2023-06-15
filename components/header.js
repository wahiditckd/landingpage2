import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex py-3">
      <div className="container flex justify-between items-center">
        <div>
          <Image src="/logo1.svg" width={237} height={60} alt="logo" />
        </div>
        <div className="flex items-center gap-7">
          <ul className="flex items-center gap-7">
            <li>
              <Link href="#">CAtalog</Link>
            </li>
            <li>
              <Link href="#">Arrival</Link>
            </li>
            <li>
              <Link href="#">Favorite</Link>
            </li>
            <li>
              <Link href="#">Download</Link>
            </li>
          </ul>
          <Link href="#" className="bg-black text-white rounded-md px-4 py-2">
            SIgn up
          </Link>
        </div>
      </div>
    </div>
  );
}
