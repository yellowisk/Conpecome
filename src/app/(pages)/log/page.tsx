"use client"
import pictures  from '@/assets/pictures/pictures';
import { updateQuantityById, SheetData, addClientData } from '../../../../sheetdb/sheets';
import { Toaster, toast } from 'sonner';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

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
        <div className='flex flex-col justify-center space-y-3 items-center caret-transparent h-screen bg-gradient-to-r from-orange-strong orange-linear to-orange-serene'>
            <h1 className='text-4xl text-tertiary uppercase caret-transparent select-none font-semibold'>SEU EMAIL:</h1>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <Button onClick={() => saveInput()} variant='orange' transition='shadow' className='rounded-xl font-extrabold text-lg text-tertiary py-6 select-none'>Enviar</Button>
            <Toaster position="bottom-left" richColors closeButton />
        </div>
    );
}
