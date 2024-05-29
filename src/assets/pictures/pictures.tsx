import pacoca from "@assets/pacoca.jpg"
import toddynho from "@assets/toddynho.jpg"
import valsa from "@assets/valsa.webp"
import cupnoodles from "@assets/cup-noodles.webp"

interface IPicture {
    src: string;
    name: string;
    price: string;
}
  var pictures: { [index: number] : IPicture; } = {};
  pictures[0] = { src: pacoca.src , name: "Pacoça", price: "1.50"};
  pictures[1] = { src: toddynho.src, name: "Toddynho", price: "2.50"};
  pictures[2] = { src: valsa.src, name: "Sonho de Valsa", price: "3.50"};
  pictures[3] = { src: cupnoodles.src, name: "Cup Noodles", price: "4.50"};

export default pictures;