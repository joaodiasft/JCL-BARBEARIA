"use client";

import Image from "next/image";
import { BarbershopService } from "../generated/prisma/client";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  const priceInReais = (service.priceInCents / 100).toFixed(2);

  return (
    <Card className="flex w-full flex-row items-center gap-3 p-3">
      <div className="relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded-lg">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex w-full flex-col gap-2 p-0">
        <h3 className="text-sm font-semibold">{service.name}</h3>
        <p className="text-muted-foreground text-xs">{service.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-primary text-sm font-bold">
            R$ {priceInReais.replace(".", ",")}
          </p>
          <Button size="sm" variant="default">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;

