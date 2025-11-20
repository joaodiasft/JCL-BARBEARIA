import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Pesquisar serviços"
        className="border-border rounded-5 w-full border px-4 py-3"
      />
      <Button
        variant="default"
        size="icon"
        className="border-border rounded-5 border px-4 py-3"
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchInput;
