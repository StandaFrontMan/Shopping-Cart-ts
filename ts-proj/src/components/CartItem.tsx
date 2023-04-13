import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json'
import { Button, Stack } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

export interface CartItemProps {
    id: number;
    quantity: number
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {

    const { removeFromCart } = useShoppingCart();
    
    const item = storeItems.find(i => i.id === id)
    
    if (item == null) {
        return null
    }

  return (
    <Stack
        direction='horizontal'
        gap={2}
        className='align-items-center d-flex' 
    >
        <img
            src={item.imgUrl}
            style={{ width: '125px', height: '75px', objectFit: 'cover' }}
        />

        <div
            className='me-auto'
        >
            <div>
                {item.name}{' '}
                {
                    quantity > 1 && (
                        <span
                            className='text-muted'
                            style={{ fontSize: '.85rem' }}
                        >
                            x{quantity}
                        </span>
                    )
                }
            </div>
            <div
                className='text-muted'
                style={{ fontSize: '.75rem' }}
            >
                {formatCurrency(item.price)}
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
                <Button
                variant='ouline-danger'
                size='sm'
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
            </div>
            
        </div>
    </Stack>
  )
}

export default CartItem