"use client"
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import conpec from '@assets/conpeclogo.png';
import image_upload from '@assets/image_upload_icon.png';
import editor_icon from '@assets/editor_icon.png';
import remove_icon from '@assets/remove_icon.png';
import add_icon from '@assets/add-icon.png';


export default function Editor (){

    const router = useRouter();

    return(
        <div className='flex flex-col items-center justify-evenly h-screen bg-orange-seashell'>
            <div className='flex flex-row justify-between w-screen'>
                <div className='flex flex-col justify-center ml-3'>
                    <button onClick={()=>router.push('/order')}>
                        <ArrowLeft className='text-red-imperial font-bold' size={34}></ArrowLeft>
                    </button>
                </div>
                <div className='flex flex-col justify-center mr-3'>
                    <Image src={conpec.src} alt='logo' width={64} height={64}></Image>
                </div>
            </div>
            
            <div className='flex flex-col justify-evenly items-center grow w-screen'>
                <h1 className='font-bold text-orange-coquelicot text-5xl font-pixelify'>Adicionar Produto</h1>

                <div className='flex flex-row justify-center border-1 border-orange-linear h-1/6 w-2/3 rounded-3xl'>
                    <button className='flex flex-col justify-center items-center w-1/3'>
                        <div className='flex flex-row justify-end w-4/5'>
                            <Image src={editor_icon.src} alt='editor_icon' width={16} height={16}></Image>
                        </div>

                        <Image src={image_upload.src} alt='image_upload_icon' width={64} height={64}></Image>
                        
                    </button>

                    <div className='flex flex-col justify-evenly w-2/3'>
                        <div className='flex flex-row justify-evenly w-2/3 font-poppins text-orange-linear font-semibold'>
                            <h1>Inserir nome</h1>
                            <Image src={editor_icon.src} alt='editor_icon' width={16} height={16}></Image>
                        </div>

                        <div className='flex flex-row justify-evenly w-2/3 font-poppins text-orange-linear font-semibold'>
                            <h1>Inserir preço</h1>
                            <Image src={editor_icon.src} alt='editor_icon' width={16} height={16}></Image>
                        </div>

                        <div className='flex flex-row justify-evenly'>
                            <button>
                                <Image src={remove_icon.src} alt='remove_icon' width={28} height={28}></Image>
                            </button>

                            <h1 className='text-orange-linear font-bold'>0</h1>

                            <button>
                            <Image src={add_icon.src} alt='add_icon' width={28} height={28}></Image>
                            </button>
                        </div>

                    </div>
                </div>


            </div>

            <button className='w-3/5 h-14 bg-orange-linear rounded-full text-white font-poppins font-bold text-lg'>Confirmar Alterações</button>

        </div>

    );


}