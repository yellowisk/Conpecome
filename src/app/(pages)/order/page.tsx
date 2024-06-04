"use client"
import EmblaCarousel from '@/components/ui/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import pictures  from '@/assets/pictures/pictures'
import "./embla.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Pesquisar from "@components/ui/searchbar/searchbar"
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Order() {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: false}
    const SLIDE_COUNT = Object.keys(pictures).length;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    const [value, setValue] = useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (        
        <div className='flex flex-col justify-evenly items-center caret-transparent h-screen'>
            <div className="flex items-center justify-center">
                <Pesquisar/> 
            </div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, minWidth: 350, display: 'flex', justifyContent: 'space-around' }}>
                    <TabList onChange={handleChange} aria-label="Food Tab">
                        <Tab label="Doces" value="1" sx={{color: 'black'}}/>
                        <Tab label="Salgados" value="2" />
                        <Tab label="Bebidas" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </TabPanel>
                <TabPanel value="2">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </TabPanel>
                <TabPanel value="3">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </TabPanel>
            </TabContext>
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'start', width: '90%', height: '10%'}}>
                <div className="flex">
                    <p className='text-bold text-3xl text-red-700'>Já  pode?</p>
                    <Button className='hover:drop-shadow-orange' transition='active' asChild>
                        <a href='/checkout'>
                            <Check className="bg-red-700 text-tertiary rounded-md" size={34} />
                        </a>
                    </Button>
                </div>
            </Box>
        </div>
    )
}