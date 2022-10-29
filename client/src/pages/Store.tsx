import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Store() {
    const { storeItems } = useShoppingCart()

    if (storeItems.length == 0) {
        return (
            <h1>No results found</h1>
        )
    } else {
        return (
            <>
                <h1>Store</h1>
                <Row md={2} xs={1} lg={4} className="g-3">
                    {storeItems.map(item => {
                        return (
                            <Col key={item.id}>
                                <StoreItem {...item} />
                            </Col>
                        )
                    })}
                </Row>
            </>
        )
    }

}