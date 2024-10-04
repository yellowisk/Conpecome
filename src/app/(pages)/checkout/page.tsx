'use client'
import ImageContent from '@/components/ui/image';
import { useEffect, useState } from 'react';
import pix from '@/assets/pix-icon.png';
import conpec from '@/assets/conpec.png';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'sonner';

export default function Checkout() {
    const [itemsBought, setItemsBought] = useState<{name: string, price: number, quantity: number}[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
                <div className='flex flex-col mt-20 items-center justify-evenly grid-rows-6 h-screen caret-transparent'>
                    <div className="flex flex-col items-center justify-center row-span-5 my-5">
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col items-center space-y-4 justify-center">
                                <h1 className="text-4xl text-orange-coquelicot upppercase caret-transparent select-none font-semibold">SEU PEDIDO</h1>
                                <ImageContent src={pix.src} alt='E o pix?' className='w-40'/>
                            </div>
                            <div className="flex flex-row items-center space-x-3 justify-center">
                                <p className='rounded-xl px-1 font-extrabold text-lg text-tertiary py-3 bg-gradient-to-r from-orange-strong orange-linear to-orange-serene'>11945672740</p>
                                <Button className='rounded-xl font-extrabold text-lg text-tertiary py-6 bg-gradient-to-r from-orange-strong orange-linear to-orange-serene select-none'
                                onClick={() => copyToClipboard('11945672740')}>
                                    Copiar
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center flex-start w-80 mt-3 mb-3 text-xl">
                            <ul className='w-full'>
                                {itemsBought.map((item, index) => (
                                <li key={index} className='my-1'>
                                    <div className='text-slate-700 font-semibold'>{item.quantity > 1 ? `${item.name} (${item.quantity}x)` : item.name}</div>
                                    <div className='flex justify-between text-slate-600 font-medium'>
                                        <ul>R${item.price} UN</ul>
                                        <ul>R${(item.price * item.quantity).toFixed(2)}</ul>
                                    </div> 
                                </li>
                                ))}
                            </ul>
                            <div className='mt-top-5 font-extrabold'>
                                <p>Total: R${itemsBought.map((item) => ( item.price * item.quantity ))
                                    .reduce((acc, curr) => acc + curr, 0).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start row-span-1 h-full w-full bg-orange-linear">
                        <div className='flex flex-col items-center w-full h-full'>
                            <Button className='-translate-y-5 w-auto h-12 text-tertiary text-3xl bg-orange-strong' variant='orange'
                            asChild>
                                <a href='/log'>REGISTRAR QUE PAGUEI</a>
                            </Button>
                            <div className='bg-orange-800 mb-2 rounded-2xl h-3 w-4/5'></div>
                            <div className='bg-orange-800 rounded-2xl h-3 w-3/5'></div>
                            <div>
                                <ImageContent src={conpec.src} alt='Conpec' className='w-28'/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Toaster position="bottom-right" richColors closeButton />
        </div>
    );
}

//TODO:
//mudar cor de fundo para 