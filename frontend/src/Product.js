import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ item }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${item._id}`}>
                <Card.Img src={item.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${item._id}`}>
                    <Card.Title as = "div">
                        <strong>
                            {item.name}
                        </strong>
                    </Card.Title>
                </a>
            </Card.Body>
            <Card.Text as = "div">
                <div className = "my-3">
                    {item.rating} from {item.numReviews} review
                </div>
            </Card.Text>
            <Card.Text as = 'h3'>
                ${item.price}
            </Card.Text>
        </Card>
    )
}

export default Product
