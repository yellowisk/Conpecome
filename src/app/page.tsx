import { Button } from "@/components/ui/button";
import { Sandwich } from "lucide-react"

export default function App() {
  return (
    <div className="flex flex-col space-y-6 flex-1 items-center justify-center h-screen">
      <div className="flex flex-row items-center justify-center gap-2 text-slate-50 hover:text-red-700 transition-colors duration-300">
        <Sandwich className="h-16 w-16 " />
        <h1 className="text-4xl uppercase font-semibold">Conpecome</h1>
      </div>blu
      <Button>Aperte para ao mossar</Button>
    </div>
  );
}