"use client"
import { Toaster, toast } from 'sonner';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { collection, doc, getDocs, updateDoc, addDoc } from 'firebase/firestore';
import { db, storage } from '@firebase/firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Product, User } from '@/firebase/schema/entities';
import { useRouter } from 'next/navigation';

export default function Products() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(0);
    const [file, setFile] = useState<File | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    const productCollectionRef = collection(db, 'products');
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        setUser(user);
        setLoading(false);

        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(productCollectionRef);
                const productList: Product[] = [];
                querySnapshot.forEach((doc) => {
                    productList.push({id: doc.id, ...doc.data() } as Product);
                });
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Erro ao buscar produtos');
            }
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        if (!file) {
            toast.error('Please select an image file.');
            return;
        }
    
        try {
            // Step 1: Add the product to Firestore without the image URL
            const productDocRef = await addDoc(productCollectionRef, {
                name,
                price,
                type,
                amount,
                imageurl: '' // Initially set to an empty string
            });
    
            // Get the product ID
            const productId = productDocRef.id;
    
            // Step 2: Save image to storage with the product ID as the filename
            const imageRef = ref(storage, `images/${productId}`); // Use productId as filename
            const uploadTask = uploadBytesResumable(imageRef, file);
    
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.error('Error uploading image:', error);
                    toast.error('Erro ao enviar imagem');
                },
                async () => {
                    try {
                        // Get download URL after upload completes
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        console.log('File available at', downloadURL);
    
                    // Step 3: Update the product document with the image URL
                    const productDoc = doc(db, 'products', productId);
                    await updateDoc(productDoc, { imageurl: downloadURL });
    
                        toast.success('Produto adicionado com sucesso');
    
                        // Fetch updated list of products
                        const querySnapshot = await getDocs(productCollectionRef);
                        const productList: Product[] = [];
                        querySnapshot.forEach((doc) => {
                            productList.push({ id: doc.id, ...doc.data() } as Product);
                        });
                        setProducts(productList);
                        console.log('Products:', productList); // Ensure the updated list is logged
                    } catch (error) {
                        console.error('Error updating product:', error);
                        toast.error('Erro ao atualizar produto com imagem');
                    }
                }
            );
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('Unexpected error occurred');
        }
    };
    
    if (loading) {
        return <></>
    }

    return (
        (user) ? (
        <div className='flex flex-col justify-center space-y-3 items-center h-screen bg-gradient-to-r from-orange-strong orange-linear to-orange-serene'>
            <input type="text" onChange={(e) => setName(e.target.value)} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <input type="number" onChange={(e) => setPrice(Number(e.target.value))} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <input type="text" onChange={(e) => setType(e.target.value)} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <input type="number" onChange={(e) => setAmount(Number(e.target.value))} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <input type="file" onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                    setFile(e.target.files[0]);
                }
            }} className='rounded-xl px-2 w-2/6 font-extrabold text-lg py-3 text-orange-600'/>
            <Button onClick={handleAddProduct} variant='orange' transition='shadow' className='rounded-xl font-extrabold text-lg text-tertiary py-6 select-none'>Adicionar ao Estoque</Button>
            

            <div className='flex flex-col justify-center space-y-3 items-center h-screen bg-gradient-to-r from-orange-strong orange-linear to-orange-serene'>
                <h1 className='text-4xl text-tertiary uppercase select-none font-semibold'>Produtos</h1>
                {products.map((product) => (
                    <div key={product.id} className='flex flex-row justify-center space-x-28 items-center'>
                        <Image src={product.imageurl} alt={product.name} width={10} height={10} className='h-10 w-10'/>
                        <p className='text-lg text-tertiary'>{product.name}</p>
                        <p className='text-lg text-tertiary'>{product.price}</p>
                        <p className='text-lg text-tertiary'>{product.type}</p>
                        <p className='text-lg text-tertiary'>{product.amount}</p>
                    </div>
                ))}
            </div>
            
            <Toaster position="bottom-left" richColors closeButton />
        </div>
        ) : (
            router.push('adm/login')
        )
        
    );
}
