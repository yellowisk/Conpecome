import { Search } from "lucide-react";
import React from "react";
import { Button } from "../button";

const Pesquisar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="flex flex-row">
      <input type="text" placeholder="Pesquisar" className="bg-orange-200 text-black rounded-lg ... bg-orange-150 placeholder-slate-950"/>
      <Button className="hover:drop-shadow-glow transition ease-in-out delay hover:-translate-y-1 hover:scale-110 duration-300 bg-orange-400 translate-x-1">
        <Search/>
      </Button>
    </div>
  );
};

export default Pesquisar;
