import pacoca from "@assets/pacoca.png"
import toddynho from "@assets/toddynho.png"
import valsa from "@assets/valsa.png"
import cupnoodles from "@assets/cup-noodles.png"
import ourobranco from "@assets/ouro-branco.png"

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
  pictures[4] = { src: ourobranco.src, name: "Ouro Branco", price: "2.00"};

export default pictures;