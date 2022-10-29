import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilites/formatCurrency"
import { Button } from 'react-bootstrap'

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { storeItems } = useShoppingCart()
    const { removeFromCart , cartItems } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{ width: '125px', height: '75px', objectFit: 'contain' }} />
            <div className="me-auto">
                <div className="">
                    {item.name}{ }{quantity > 1 && (<span className="text-muted" style={{ fontSize: '.65rem' }}>x{quantity}</span>)}
                </div>
                <div className="text-muted" style={{ fontSize: '.75rem' }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}