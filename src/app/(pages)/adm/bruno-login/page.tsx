"use client"
import { Button } from "@mui/material";
import Image from "next/image";
import { ArrowLeft, ComponentIcon} from "lucide-react";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import conpec from '@/assets/conpeclogo.png'
import { useRouter } from "next/router";

export default function logAdmin() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const router = useRouter();

    const goToHome = () => {
        router.push('@src/app/page.tsx');
    };

    return(
        <div className="flex flex-col bg-orange-seashell h-screen w-screen"> {/*Div que contem a telat toral*/}
            <div className="flex flex-col items-center w-full h-1/3 pt-3">
                <div className="flex flex-row w-1/2 h-1/3 border-10 items-center">
                    <div className="w-1/2 pl-5">
                        <ArrowLeft onClick={goToHome}={} "className='text-red-imperial font-bold' size={34}></ArrowLeft> {/*Essa seta tem que fazer algo*/}    
                    </div>
                    <div className="flex flex-row w-1/2 justify-end pr-5">
                        <Image src={conpec.src} alt='logo' width={100} height= {100} className='size-16'></Image>
                    </div>
                </div>
                <h1 className="flex flex-row  h-1/3 font-pixelify text-orange-strong text-5xl font-bold justify-center items-center">
                    Login
                </h1>
            </div>
            <div className="flex flex-col items-center w-full h-1/3">
                <div className=" w-1/2 h-1/3 pb-3 " > {/*nome*/} 
                    <div className="flex flex-row justify-start w-fit h-2/5 text-orange-linear text font-poppins font-bold text-base ml-5 pt-2">
                    Nome
                    </div>  
                    <input type="word" placeholder="Insira seu nome" className="flex flex-row w-full placeholder-orange-strong placeholder-opacity-60 h-3/5 text-sm bg-background border-orange-strong border-2 rounded-full stroke-orange-strong border-opacity-40 justify-start pl-3 font-poppins font-bold text-orange-strong items-center focus:outline-none focus:ring-2 focus:ring-orange-strong focus" ></input>

                </div>
                <div className=" w-1/2 h-1/3 pb-3"> {/*email*/}
                    <div className="flex flex-row justify-start w-fit h-2/5 text-orange-linear text font-poppins font-bold text-base ml-5 pt-2">Email</div>
                    <input type="word" placeholder="Insira seu email" className="flex flex-row w-full h-3/5 placeholder-orange-strong placeholder-opacity-60 text-sm bg-background border-orange-strong border-2 rounded-full stroke-orange-strong border-opacity-40 justify-start pl-3 font-poppins font-bold text-orange-strong items-center focus:outline-none focus:ring-2 focus:ring-orange-strong focus" ></input>
                </div>
                <div className=" w-1/2 h-1/3 pb-3"> {/*senha*/}
                    <div className="flex flex-row justify-start w-fit h-2/5 text-orange-linear text font-poppins font-bold text-base ml-5 pt-2">Senha</div>
                        <div className="flex flex-row justify-end items-center h-3/5">
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Insira sua senha" className="flex flex-row placeholder-orange-strong placeholder-opacity-60 w-full h-full text-sm bg-background border-orange-strong border-2 rounded-full stroke-orange-strong border-opacity-40 justify-start pl-3 font-poppins font-bold  text-orange-strong items-center focus:outline-none focus:ring-2 focus:ring-orange-strong focus"/>
                            <div className="absolute flex items-center pr-5 cursor-pointer" onClick={togglePasswordVisibility}>
                                {showPassword ? <EyeOff className="text-orange-strong" /> : <Eye className=" text-orange-strong" />}
                            </div>
                        </div>
                    </div>
                </div>
            <div className="flex flex-row justify-center items-center w-full h-1/3">
                <Button className="w-1/5 h-1/6 bg-orange-strong rounded-full text-background font-poppins font-bold text-sm">
                    Entrar
                </Button>

                
            </div>
        </div>
    );
}
