"use client";

import { Button } from "@/app/_components/ui/button";
import { SmartphoneIcon } from "lucide-react";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhone = () => {
    if (phone) {
      navigator.clipboard.writeText(phone);
      toast.success("Telefone copiado com sucesso!", {
        duration: 2000,
        style: {
          background: "var(--primary)",
          color: "var(--primary-foreground)",
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SmartphoneIcon className="size-6" />
        <p className="text-sm">{phone}</p>
      </div>
      <Button variant="outline" size="sm" onClick={handleCopyPhone}>
        Copiar
      </Button>
    </div>
  );
};

export default PhoneItem;

