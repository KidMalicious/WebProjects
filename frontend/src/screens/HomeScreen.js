import React from 'react'
import products from '../products'
import Product from '../Product'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <h1>
                Latest and Greatest 
            </h1>
            <Row>
                {products.map(item => (
                    <Col sm={12} md={6} lg={4} xl={3} >
                        <Product item = {item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen