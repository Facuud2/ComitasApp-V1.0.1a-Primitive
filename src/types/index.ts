export type TProduct = {
    id: number;
    name: string;
    price: number;
    description: string;
}

export type TOrder = Omit<TProduct, 'description'> & {
    quantity: number;
}