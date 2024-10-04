"use client"
import { Toaster, toast } from 'sonner';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ImageContent from '@/components/ui/image';

import conpec from '@assets/conpeclogo.png';

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    name: z.string().max(100, { message: "Nome gigante!" }).min(1, {message: "Insira seu nome!"}),
    email: z.string().email({ message: "Email inválido!"} ).min(1, { message: "Insira seu email!"}),
  });
  
type FormFields = z.infer<typeof schema>;

export default function Log() {

    const router = useRouter();

    const saveInput = (email: string) => {
        toast.success('Marcha, bom ao mosso!')
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }

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
            saveInput(data.email)
        } catch (error) {
        }
      };

    useEffect(() => {
        if (errors.name) {
            toast.error(errors.name.message);
        }
        if (errors.email) {
            toast.error(errors.email.message);
        }
    }, [errors]);

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
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center border-3 border-orange-linear h-4/5'>
                <h1 className='text-4xl caret-transparent select-none font-semibold text-orange-coquelicot'>Informações</h1>
                
                <h1 className=' caret-transparent select-none font-semibold text-orange-linear text-base'>Nome</h1>
                <input {...register("name")} placeholder='Inserir nome'
                className='rounded-xl px-2 font-extrabold text-lg py-3 text-orange-600 w-full placeholder-orange-pale'/>

                <h1 className=' caret-transparent select-none font-semibold text-orange-linear text-base'>Email</h1>
                <input {...register("email")} placeholder='Inserir email' 
                className='rounded-xl px-2 font-extrabold text-lg py-3 text-orange-600 w-full placeholder-orange-pale'/>
                <Button disabled={isSubmitting} variant='orange' transition='shadow' className='rounded-xl font-extrabold text-lg text-tertiary py-6 select-none'>
                    {   isSubmitting ? "Carregando..." : "Enviar"}
                </Button>
            </form>
            <Toaster position="bottom-left" richColors closeButton />
        </div>
    );
}
