import { Button } from "@/components/ui/button";
import ImageContent from "@/components/ui/image";
import { Sandwich } from "lucide-react"
import kirby from "@/assets/kirby-vacuum.gif"

export default function App() {
  return (
    <div className="flex flex-col space-y-6 flex-1 items-center justify-center h-screen">
      <div className="flex flex-row items-center justify-center gap-2 text-slate-50 hover:drop-shadow-glow transition duration-300">
        <Sandwich className="h-16 w-16 " />
        <h1 className="text-4xl uppercase caret-transparent select-none font-semibold">Conpecome</h1>
      </div>
      <Button className="caret-transparent hover:drop-shadow-glow transition ease-in-out delay hover:-translate-y-1 hover:scale-110 duration-300" asChild>
        <a href="/order">Aperte para ao mossar</a>
      </Button>
    </div>
  );
}