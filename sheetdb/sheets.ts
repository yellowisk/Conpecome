import axios from 'axios';

export interface SheetData {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface ClientData {
    email: string;
    date: string;
    items: string
}

export const readStockSheet = async (): Promise<SheetData[]> => {
    try {
        const response = await axios.get<SheetData[]>("https://sheetdb.io/api/v1/z1fdule44lis9");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; 
    }
};

export const readClientSheet = async (): Promise<ClientData[]> => {
    try {
        const response = await axios.get<ClientData[]>("https://sheetdb.io/api/v1/qj20ujuijgnzc");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export const searchById = async (id: number): Promise<SheetData[]> => {
    try {
        const response = await axios.get<SheetData[]>(`https://sheetdb.io/api/v1/z1fdule44lis9/search_or?id=${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export const searchByEmail = async (email: string): Promise<ClientData[]> => {
    try {
        const response = await axios.get<ClientData[]>(`https://sheetdb.io/api/v1/qj20ujuijgnzc/search_or?email=${email}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export const addClientData = async (email: string, date: string, items: SheetData[]): Promise<void> => {
    const url = `https://sheetdb.io/api/v1/qj20ujuijgnzc`;
    const itemsName = items.map((item) => `${item.id} - (${item.quantity}x)`)
    console.log(itemsName)
    const data = {
        data: {
            email: email,
            date: date,
            items: itemsName
        }
    };
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    try {
        await axios.post(url, data, { headers });
    } catch (error) {
        console.error("Error updating data:", error);
    }
}

export const updateQuantityById = async (id: number, item: SheetData): Promise<void> => {

    const row = await searchById(id);

    const url = `https://sheetdb.io/api/v1/z1fdule44lis9/id/${id}`;
    const data = {
        data: {
            quantity: row[0].quantity - item.quantity
        }
    };
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    try {
        await axios.patch(url, data, { headers });
    } catch (error) {
        console.error("Error updating data:", error);
    }
};
