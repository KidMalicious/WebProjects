import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    const main = 
    <Row>
        {products.map(item => (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3} >
                <Product item={item} />
            </Col>
        ))}
    </Row>

    return (
        <>
            <h1>
                Latest and Greatest
            </h1>
            {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3>: main}
        </>
    )
}

export default HomeScreen
