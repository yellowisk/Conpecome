"use client"
import { Toaster, toast } from 'sonner';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

import { collection, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@firebase/firebase-config';

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    email: z.string().email({ message: "Email inválido!" }).min(1),
    password: z.string().min(8, { message: "Sua senha precisa ter no mínimo 8 caracteres!" }),
  });
  
type FormFields = z.infer<typeof schema>;
  

export default function Admin() {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
      } = useForm<FormFields>({
        resolver: zodResolver(schema),
      });

      const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = {...userCredential.user, timeout: Date.now() + (1000 * 60 * 30)};
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                toast.success('Marcha!!!');
                setTimeout(() => {
                    router.push('/adm/products');
                }, 2000);
            }
        } catch (error) {
            toast.error('Eita, deu ruim!');
        }
      };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='login flex flex-col justify-center space-y-3 items-center h-screen bg-gradient-to-r from-orange-strong orange-linear to-orange-serene'>
                <h1 className='text-4xl text-tertiary uppercase select-none font-semibold'>ÁREA ADMIN</h1>
                {errors.email && (
                    <p className="text-slate-200">{errors.email.message}</p>
                )}
                <input {...register("email")} type="text" placeholder="Email" className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
                {errors.password && (
                    <p className="text-slate-200">{errors.password.message}</p>
                )}
                <input {...register("password")} type="password" placeholder={"Password"} autoComplete='off' className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600' />
                <Button disabled={isSubmitting} type="submit" variant='orange' transition='shadow' className='rounded-xl font-extrabold text-lg text-tertiary py-6 select-none'>
                    {isSubmitting ? "Carregando..." : "Logar"}
                </Button>
                {errors.root && <p className="text-red-500">{errors.root.message}</p>}
            </form>
            <Toaster position="bottom-left" richColors closeButton />  
        </div>
    );
}
