import { category_data, productData, registerData } from './reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    register: registerData,
    product: productData,
    category_subCategoroies: category_data
})
