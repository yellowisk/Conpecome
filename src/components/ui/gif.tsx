import React from "react";

const Gif: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Gif;