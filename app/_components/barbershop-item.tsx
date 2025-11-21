import Link from "next/link";
import { Barbershop } from "../generated/prisma/client";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Link
      href={`/barbershops/${barbershop.id}`}
      className="relative min-h-[200px] min-w-[280px] overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black to-transparent"></div>
      <Image
        src={barbershop.imageUrl}
        alt={barbershop.name}
        fill
        className="rounded-xl object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="font-mono text-2xl font-bold text-white">
          {barbershop.name}
        </h1>
        <p className="text-sm text-white">{barbershop.address}</p>
      </div>
    </Link>
  );
};

export default BarbershopItem;
