import { createContext, useContext, useState, PropsWithChildren } from "react";
import { CartItem, Product } from "@/types";
import {randomUUID} from 'expo-crypto';

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
    total: number;
}

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {},
    total: 0,
});

const CartProvider = ({children}: PropsWithChildren) => {

    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {
        const existingItem = items.find(
            (item) => item.product === product && item.size === size
        );

        if(existingItem){
            updateQuantity(existingItem.id, 1);
            return;
        }
        
        const newCartItem: CartItem = {
            product,
            size,
            quantity: 1,
            product_id: product.id,
            id: randomUUID(),
        };
        setItems([newCartItem, ...items]);
    };

    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        setItems(items.map(item => item.id !== itemId ? item : {...item, quantity: item.quantity + amount}).filter(item => item.quantity > 0));
    };

    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items,
            addItem,
            updateQuantity,
            total,
        }}>
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);