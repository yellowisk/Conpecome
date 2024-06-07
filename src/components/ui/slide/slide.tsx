import React, { useState } from "react";
import { Box, Card, CardHeader } from "@mui/material";
import { Button } from "../button";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./slide.css";

const Slide: React.FC<{ image: string; title: string; price: string; className?: string }> = ({ image, title, price, className }) => {

  const [counter, setCount] = useState(0);
  const onClick = () => {
    setCount(c => Math.min(c + 1, 20));
  };
  const onClickDec = () => {
    setCount(c => Math.max(c - 1, 0));
  };

  return (
    <div className="relative-slide mx-4">
      <Card sx={{ maxWidth: 345 }} className="px-8 bg-orange-transparent rounded-xl my-4">
        <CardHeader sx={{ textAlign: 'center' }} className="text-tertiary px-0 py-0 m-2 bg-orange-strong rounded-full" classes={{}} title={'$'+price} titleTypographyProps={{variant: 'h6'}}/>
        <div className="flex justify-center">  
          <CardMedia
            sx={{ height: 140, width:150 }}
            image={image}
            title={title}
          />
        </div>
        <CardContent className="flex justify-center">
          <Typography sx={{ textAlign: 'center' }} className="text-xl font-medium text-primary">
            {title}
          </Typography>
        </CardContent>
      <CardActions className="flex justify-around items-center">
            <Button onClick={onClickDec} variant='serene' size="default" transition="active">-</Button>
            <p className="text-2xl font-medium text-primary">{counter}</p>
            <Button onClick={onClick} variant='serene' size="default" transition="active">+</Button>
        </CardActions>
      </Card>
    </div>
  )
};

export default Slide;
