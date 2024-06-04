import { Search } from "lucide-react";
import React from "react";
import { Button } from "../button";

const Pesquisar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="flex flex-row bg-orange-200 text-black rounded-lg ...">
      <input type="text" placeholder="Pesquisar" className="bg-transparent placeholder-slate-950"/>
      <Button className="translate-x-1" size="sh">
        <Search className=" size-4"/>
      </Button>
    </div>
  );
};

export default Pesquisar;
