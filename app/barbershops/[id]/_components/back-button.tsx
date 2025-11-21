"use client";

import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <Button
      size="icon"
      variant="outline"
      className="absolute left-4 top-4 bg-background"
      onClick={handleGoBack}
    >
      <ChevronLeftIcon />
    </Button>
  );
};

export default BackButton;

