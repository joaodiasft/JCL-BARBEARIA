import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import Image from "next/image";
import banner from "@/public/banner.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Barbershop Banner"
          sizes="100vw"
          className="h-auto w-full py-2"
        />
      </div>
    </div>
  );
};

export default Home;
