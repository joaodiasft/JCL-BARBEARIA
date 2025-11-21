import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";
import ServiceItem from "@/app/_components/service-item";
import { PageSection, PageSectionTitle } from "@/app/_components/ui/page";
import { Separator } from "@/app/_components/ui/separator";
import BackButton from "./_components/back-button";
import PhoneItem from "./_components/phone-item";
import Footer from "@/app/_components/footer";

const BarbershopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;
  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id: id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Banner com botão voltar */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover"
          priority
        />
        <BackButton />
      </div>

      {/* Conteúdo */}
      <div className="space-y-6 p-5">
        {/* Título e Endereço */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-secondary flex size-12 items-center justify-center rounded-full">
              <Image
                src={barbershop.imageUrl}
                alt={barbershop.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">{barbershop.name}</h1>
              <div className="flex items-center gap-2">
                <MapPinIcon className="text-primary size-4" />
                <p className="text-muted-foreground text-sm">
                  {barbershop.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Sobre Nós */}
        <PageSection>
          <PageSectionTitle>Sobre Nós</PageSectionTitle>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {barbershop.description}
          </p>
        </PageSection>

        <Separator />

        {/* Serviços */}
        <PageSection>
          <PageSectionTitle>Serviços</PageSectionTitle>
          <div className="space-y-3">
            {barbershop.services?.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </PageSection>

        <Separator />

        {/* Contato */}
        <PageSection>
          <PageSectionTitle>Contato</PageSectionTitle>
          <div className="space-y-3">
            {barbershop.phones?.map((phone, index) => (
              <PhoneItem key={index} phone={phone} />
            ))}
          </div>
        </PageSection>
      </div>

      <Footer />
    </div>
  );
};

export default BarbershopPage;
