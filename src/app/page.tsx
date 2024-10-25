import { Button } from '@/components/ui/button';
import { Sandwich } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col space-y-6 flex-1 items-center justify-center h-screen bg-orange-600 text-zinc-200">
      <div className="flex flex-row items-center justify-center gap-2 text-slate-50 hover:drop-shadow-glow transition duration-300">
        <Sandwich className="h-16 w-16" />
        <h1 className="text-4xl uppercase caret-transparent select-none font-semibold">Conpecome</h1>
      </div>
      <Button variant='orange' transition='shadow' className="caret-transparent" asChild>
        <a href="/order">Aperte para ao mossar</a>
      </Button>
    </div>
  );
}