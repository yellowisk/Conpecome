type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

type Product = {
    id: string;
    name: string;
    price: number;
    type: string;
    amount: number;
    imageurl: string;
};

type Order = {
    id: string;
    user: User;
    products: Product[];
};

export type { User, Product, Order };