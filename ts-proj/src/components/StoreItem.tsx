import React from 'react'
import {
    Button,
    Card,
} from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency';

export interface StoreItemProps {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

const StoreItem: React.FC<StoreItemProps> = ({id, name, price, imgUrl}) => {

const quantity: number = 1;

  return (
    <Card className='h-100'>
        <Card.Img
            variant='top'
            src={imgUrl}
            height='200px'
            style={{objectFit: 'cover'}}
        />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className=''>{name}</span>
                <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
                {
                    quantity == 0 ? (
                        <Button className='w-100'>
                            + Add to Cart
                        </Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column'
                            style={{gap: '.5rem'}}
                        >
                            <div className='d-flex align-items-center justify-content-center'
                                style={{gap: '.5rem'}}
                            >
                                <Button>-</Button>
                                <div>
                                    <span className='fs-1'>{quantity} </span>
                                    in Cart
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button variant='danger' size='sm'>
                                Remove
                            </Button>
                        </div>
                    )
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem