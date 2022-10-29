import { useRef } from 'react'
import { Button, Container, Form, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
    const { openCart, closeCart, cartQuantity, cartItems, updateSearchQuery } = useShoppingCart()
    const searchRef = useRef<HTMLInputElement>(null)
    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
                    <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
                    <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
                </Nav>
                <Form className="d-flex p-2">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        name='q'
                        ref={searchRef}
                        onChange={() => {
                            if (searchRef.current != null) {
                                updateSearchQuery(searchRef.current.value)
                            }
                        }}
                    />
                </Form>
                <Button
                    style={{ height: '3rem', width: '3rem', position: 'relative' }}
                    variant='outline-primary'
                    className='rounded-circle'
                    onClick={openCart}
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                    {cartQuantity === 0 || <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 25%)' }}
                    >
                        {cartQuantity}
                    </div>}
                </Button>
            </Container>
        </NavbarBs>
    )
}