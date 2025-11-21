import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import Image from "next/image";
import banner from "@/public/banner.png";
import BookingItem from "./_components/boooking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";
import { PageContainer, PageSectionTitle } from "./_components/ui/page";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
    take: 4,
  });

  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
    take: 4,
  });
  return (
    <PageContainer>
      <Header />
      <div className="space-y-4 p-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Barbershop Banner"
          sizes="100vw"
          className="h-auto w-full py-2"
        />
        <PageSectionTitle>Agendamentos</PageSectionTitle>
        <BookingItem
          serviceName={"Corte 1"}
          barberShopName={"Barbearia Jsoh"}
          barberShopImageUrl={
            "https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png"
          }
          date={new Date()}
        ></BookingItem>
        <PageSectionTitle>Recomendados</PageSectionTitle>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recommendedBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <PageSectionTitle>Populares</PageSectionTitle>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default Home;
