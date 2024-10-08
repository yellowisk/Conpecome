'use client'
import ImageContent from '@/components/ui/image';
import { useEffect, useState } from 'react';
import pix from '@/assets/pix-icon.png';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import conpec from '@assets/conpeclogo.png';

export default function Checkout() {
    const [itemsBought, setItemsBought] = useState<{name: string, price: number, quantity: number}[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const fetchData = async () => {
                try {
                    const itemsFromStorage = JSON.parse(localStorage.getItem('items') || '[]');
                    setItemsBought(itemsFromStorage);
                    toast.loading('Processando pedido...');
                    setTimeout(() => {
                        setIsLoading(false);
                        toast.dismiss();
                        toast.success('Pedido processado!');
                    }, 3000);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setIsLoading(false); // Ensure loading state is cleared in case of error
                }
            };
            fetchData();
        }
    }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success('Copiado para a área de transferência!');
        }).catch(() => {
            toast.error('Erro ao copiar para a área de transferência!');
        });
    };

    return (
        <div>
            {isLoading ? (
                <p></p>
            ) : (
                
                <div className='flex flex-col items-center justify-evenly h-screen bg-orange-seashell'>
    
                    <div className='flex flex-row justify-between w-screen'>
                        <div className='flex flex-col justify-center ml-3'>
                            <button onClick={()=>router.push('/order')}>
                                <ArrowLeft className='text-red-imperial font-bold' size={34}></ArrowLeft>
                            </button>
                        </div>
                        <div className='flex flex-col justify-center mr-3'>
                            <ImageContent src={conpec.src} alt='logo' className='size-16'></ImageContent>
                        </div>
                    </div>
                    
                    <div className='flex flex-col justify-start text-lg items-center grow w-screen'>
                        <h1 className='font-bold text-5x1'>SEU PEDIDO</h1>
                        <div className=''><ImageContent src = {pix.src} alt = 'pix-logo' className='size-24'></ImageContent></div>
                        <div className='flex flex-row justify-center'>

                        </div>
                    </div>
                    
                </div>
            )}
            <Toaster position="bottom-right" richColors closeButton />
        </div>
    );
    //"seu pedido", pixi, código pixi, botão copiar 
}
