import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import Image from "next/image";
import banner from "@/public/banner.png";
import BookingItem from "./_components/boooking-item";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Barbershop Banner"
          sizes="100vw"
          className="h-auto w-full py-2"
        />
        <h2 className="text-foreground text-xs font-bold">Agendamentos</h2>
        <BookingItem
          serviceName={"Corte 1"}
          barberShopName={"Barbearia Jsoh"}
          barberShopImageUrl={
            "https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png"
          }
          date={new Date()}
        ></BookingItem>
      </div>
    </main>
  );
};

export default Home;
