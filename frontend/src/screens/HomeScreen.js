import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import { productDetailsReducer } from '../reducers/productReducers'

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
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
                <Row>
                    {products.map(item => (
                        <Col key={item._id} sm={12} md={6} lg={4} xl={3} >
                            <Product item={item} />
                        </Col>
                    ))}
                </Row>}
        </>
    )
}

export default HomeScreen
