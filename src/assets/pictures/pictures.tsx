import pacoca from "@assets/pictures/sweet/pacoca.png"
import toddynho from "@assets/pictures/sweet/toddynho.png"
import valsa from "@assets/pictures/sweet/valsa.png"
import cupnoodles from "@assets/pictures/savory/cup-noodles.png"
import ourobranco from "@assets/pictures/sweet/ouro-branco.png"
import { readStockSheet } from "../../../sheetdb/sheets"

interface IPicture {
    src: string;
    name: string;
    price: string;
    type: string;
    quantity: number;
}

var pictures: { [index: number] : IPicture; } = {};

pictures[0] = { src: pacoca.src , name: "Pacoça", price: "1.50", type: "sweet", quantity: 0};
pictures[1] = { src: toddynho.src, name: "Toddynho", price: "2.50", type: "drink", quantity: 0};
pictures[2] = { src: valsa.src, name: "Sonho de Valsa", price: "3.50", type: "sweet", quantity: 0};
pictures[3] = { src: cupnoodles.src, name: "Cup Noodles", price: "4.50", type: "savory", quantity: 0};
pictures[4] = { src: ourobranco.src, name: "Ouro Branco", price: "2.00", type: "sweet", quantity: 0};

export const getStock = async () => {
    const data = await readStockSheet();
    data.forEach((item) => {
        pictures[item.id - 1].quantity = item.quantity;
        pictures[item.id - 1].price = item.price.toString();
    });
    data.forEach((item) => {
        console.log(item)
    });
}

export default pictures;