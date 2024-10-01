"use client"
import pictures  from '@/assets/pictures/pictures';
import { updateQuantityById, SheetData, addClientData } from '../../../../sheetdb/sheets';
import { Toaster, toast } from 'sonner';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ImageContent from '@/components/ui/image';
import conpec from '@assets/conpeclogo.png';

export default function Log() {

    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    const saveInput = () => {

        if (!email) {
            toast.warning('Email inválido');
            return;
        }

        addClientData(email, new Date().toLocaleString(), JSON.parse(localStorage.getItem('items') || '[]'))
        const data = JSON.parse(localStorage.getItem('items') || '[]')
        data.map((item: SheetData) => {
            updateQuantityById(item.id, item)
        })
        localStorage.removeItem('items')
        toast.success('Marcha, bom ao mosso!')
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }


    return (
        <div className='flex flex-col space-y-3 items-center caret-transparent h-screen bg-orange-antique '>
            <div className='flex flex-row justify-between w-screen'>
                <div className='flex flex-col justify-center ml-3'>
                    <ArrowLeft className='text-red-imperial font-bold' size={34}></ArrowLeft>
                </div>
                <div className='mr-3'>
                <ImageContent src={conpec.src} alt='logo' className='size-16'></ImageContent>
                </div>
            </div>
            <div className='flex flex-col justify-center border-3 border-orange-linear h-4/5'>
                <h1 className='text-4xl caret-transparent select-none font-semibold text-orange-coquelicot'>Informações</h1>
                
                <h1 className=' caret-transparent select-none font-semibold text-orange-linear text-base'>Nome</h1>
                <input type="email" placeholder='Inserir nome' onChange={(e) => setEmail(e.target.value)}
                className='rounded-xl px-2 font-extrabold text-lg py-3 text-orange-600 w-full placeholder-orange-pale'/>

                <h1 className=' caret-transparent select-none font-semibold text-orange-linear text-base'>Email</h1>
                <input type="email" placeholder='Inserir email' onChange={(e) => setEmail(e.target.value)} 
                className='rounded-xl px-2 font-extrabold text-lg py-3 text-orange-600 w-full placeholder-orange-pale'/>
            </div>
            <div>
            <Button onClick={() => saveInput()} variant='orange' transition='shadow' className='rounded-xl font-extrabold text-lg text-tertiary py-6 select-none'>Enviar</Button>
            </div>
            <Toaster position="bottom-left" richColors closeButton />
        </div>
    );
}
