import React from 'react'
import {
    Navbar as NavbarBS,
    Container,
    Nav,
    Button
} from 'react-bootstrap'
import {
    NavLink
} from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'


export interface NavbarProps {
    
}

const Navbar: React.FC<NavbarProps> = () => {

    const {openCart, cartQuantity,} = useShoppingCart()

  return (
    <NavbarBS sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                <Nav.Link as={NavLink} to='store'>Store</Nav.Link>
                <Nav.Link as={NavLink} to='about'>About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button style={{width: '3rem', height: '3rem', position: 'relative'}}
                className='rounded-circle'
                onClick={openCart}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    >
                    <path d="M8.5 19a1.5 1.5 0 101.5 1.5A1.5 1.5 0 008.5 19zM19 16H7a1 1 0 010-2h8.491a3.013 3.013 0 002.885-2.176l1.585-5.55A1 1 0 0019 5H6.74A3.007 3.007 0 003.92 3H3a1 1 0 000 2h.921a1.005 1.005 0 01.962.725l.155.545v.005l1.641 5.742A3 3 0 007 18h12a1 1 0 000-2zm-1.326-9l-1.22 4.274a1.005 1.005 0 01-.963.726H8.754l-.255-.892L7.326 7zM16.5 19a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z"></path>
                </svg>
                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                    style={{
                        color: 'white',
                        width: '1.5rem',
                        height: '1.5rem',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        transform: 'translate(25%, 25%)',
                    }}
                >
                    {cartQuantity}
                    
                </div>

                
            </Button>)}
        </Container>
    </NavbarBS>
  )
}

export default Navbar