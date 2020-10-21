import * as constants from '../constants/productConstants'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: constants.PRODUCT_LIST_REQUEST
        })

        const { data } = await axios.get('/api/products')

        dispatch({
            type: constants.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: constants.PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? 
                error.reponse.data.message : 
                error.message
        })
    }
}