"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
} from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

interface SidebarMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SidebarMenu = ({ open, onOpenChange }: SidebarMenuProps) => {
  const { data: session } = authClient.useSession();

  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  const menuCategories = [
    "Cabelo",
    "Barba",
    "Acabamento",
    "Sobrancelha",
    "Massagem",
    "Hidratação",
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[90vw] overflow-y-auto p-0 sm:max-w-[350px]"
      >
        <SheetHeader className="border-b border-border p-5 text-left">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 p-5">
          {session?.user ? (
            <div className="flex items-center gap-3 py-2">
              <Avatar className="size-12">
                <AvatarImage src={session.user.image || ""} />
                <AvatarFallback>
                  {session.user.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold">{session.user.name}</p>
                <p className="text-muted-foreground text-xs">
                  {session.user.email}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-2">
              <p className="font-medium">Olá. Faça seu login!</p>
              <Button
                size="sm"
                variant="default"
                onClick={handleSignIn}
                className="gap-2"
              >
                <LogInIcon className="size-4" />
                Login
              </Button>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex flex-col gap-2 p-5">
          <Button
            variant="ghost"
            className="justify-start gap-3"
            asChild
            onClick={() => onOpenChange(false)}
          >
            <Link href="/">
              <HomeIcon className="size-5" />
              Início
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="justify-start gap-3"
            asChild
            onClick={() => onOpenChange(false)}
          >
            <Link href="/bookings">
              <CalendarIcon className="size-5" />
              Agendamentos
            </Link>
          </Button>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 p-5">
          {menuCategories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="justify-start"
              onClick={() => {}}
            >
              {category}
            </Button>
          ))}
        </div>

        {session?.user && (
          <>
            <Separator />
            <div className="flex flex-col gap-2 p-5">
              <Button
                variant="ghost"
                className="justify-start gap-3"
                onClick={handleSignOut}
              >
                <LogOutIcon className="size-5" />
                Sair da conta
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMenu;

