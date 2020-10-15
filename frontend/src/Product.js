import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import products from './products'

const Product = ({ item }) => {
    return (
        <Card border='muted' className='my-3 p-3 rounded'>
            <a href={`/product/${item._id}`}>
                <Card.Img src={item.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${item._id}`}>
                    <Card.Title as="div">
                        <strong>
                            {item.name}
                        </strong>
                    </Card.Title>
                </a>
            </Card.Body>
            <Card.Text as="div">
                <Rating value={item.rating} text={`${item.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as="h3">
                ${item.price}
            </Card.Text>
        </Card>
    )
}

export default Product
