import React, { use } from "react";
import ImageContent from "../image";
import { Button } from "../button";
import "./slide.css";
import { useState } from "react";

const  [quantity, setQuantity] = useState(0);

const Slide: React.FC<{ image: string; title: string; price: string; className?: string }> = ({ image, title, price, className }) => {
  return (
    <div className={`relative slide`}>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-white">{title}</p>
        <p className="text-2xl font-bold font-outline-2 text-amber-500">{price}</p>
      </div>
      <ImageContent src={image} alt={title} className='img h-36 w-36 object-cover rounded-md' />
      <div className='absolute inset-0 flex justify-evenly items-end'>
          <Button variant="subtract" size="xl" transition="floatZoom">-</Button>
          <p className="mb-3 text-5xl font-bold font-outline-2 text-amber-500">0</p>
          <Button variant="add" size="xl" transition="floatZoom">+</Button>
      </div>

    </div>
  )
};

export default Slide;
