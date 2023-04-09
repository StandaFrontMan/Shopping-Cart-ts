import React, { useContext, createContext, ReactNode, useState } from 'react'

export interface ShoppingCartProviderProps {
    children: ReactNode;
}

export interface CartItem {
    id: number;
    quantity: number;
}

export interface ShoppingCartContext {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({  } as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItem => {
            if(currItem.find(item => item.id === id) == null) {
                return [...currItem, {id, quantity: 1}];
            } else {
                return currItem.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItem => {
            if(currItem.find(item => item.id === id)?.quantity == null) {
                return currItem.filter(item => item.id !== id)
            } else {
                return currItem.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    const openCart = () => {
        setIsOpen(true);
    }

    const closeCart = () => {
        setIsOpen(false);
    }

    return (
    <ShoppingCartContext.Provider 
        value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            openCart, closeCart,
            cartItems,
            cartQuantity,
         }}
    >
        {children}
    </ShoppingCartContext.Provider>
    )
}