"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import SidebarMenu from "./sidebar-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-5 py-6">
        <Image src="/logo.svg" alt="Logo" width={100} height={26} />
        <Button variant="outline" size="icon" onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </Button>
      </header>

      <SidebarMenu open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  );
};

export default Header;
