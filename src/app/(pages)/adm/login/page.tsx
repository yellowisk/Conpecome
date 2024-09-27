"use client"
import pictures  from '@/assets/pictures/pictures';
import { Toaster, toast } from 'sonner';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

import { collection, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from '@firebase/firebase-config';
import { User, Product } from '@/firebase/schema/entities';

export default function Admin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = {...userCredential.user, timeout: Date.now() + (1000 * 60 * 30)};
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                toast.success('Marcha!!!');
                setTimeout(() => {
                    router.push('/adm/products');
                }, 1000);
            }
        } catch (error) {
            toast.error('Eita, deu ruim! Cê é do CACo?');
        }
    }


    return (

        <div className='flex flex-col justify-center space-y-3 items-center h-screen bg-gradient-to-r from-orange-strong orange-linear to-orange-serene'>
            <h1 className='text-4xl text-tertiary uppercase select-none font-semibold'>ÁREA ADMIN</h1>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <Button onClick={handleSignIn} variant='orange' transition='shadow' className='rounded-xl font-extrabold text-lg text-tertiary py-6 select-none'>Logar</Button>
            <Toaster position="bottom-left" richColors closeButton />
        </div>
    );
}
