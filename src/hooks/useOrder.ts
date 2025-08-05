import { useState, useMemo } from 'react';
import type { TOrder, TProduct } from '../types';

const useOrder = () => {

    const [order, setOrder] = useState<TOrder[]>([])
    const [tip, setTip] = useState(0);


    const handleAddToOrder = (product : TProduct) => {
        // Verificar si el producto ya existe
        const itemExists = order.find(item => item.id === product.id);
        if(itemExists) {
            // Si el producto ya existe, se incrementa la cantidad
            const updatedOrder = order.map(orderItem => orderItem.id === product.id 
                ? {...orderItem, quantity: orderItem.quantity + 1 } 
                : orderItem);
            setOrder(updatedOrder);
        } 
        // Si el producto no existe, se agrega
        else {
            const newItem : TOrder = {
                ...product,
                quantity: 1
            };
            setOrder([...order, newItem]);
        }
    }

    const handleRemoveFromOrder = (id : TProduct['id']) => {
        // setOrder(prevOrder => prevOrder.filter(item => item.id !== id))
        setOrder(order.filter(item => item.id !== id));
    }

    const handlePlaceOrder = () => {
        setOrder([]);
        setTip(0);
        alert('¡Gracias por su pedido!');
    }

    const subtotalAmount = useMemo( () => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order]);

    return {
        order,
        tip,
        subtotalAmount,
        setTip,
        handleAddToOrder,
        handleRemoveFromOrder,
        handlePlaceOrder
    }
}

export default useOrder;