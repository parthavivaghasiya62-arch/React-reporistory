
import httpServices from "../../httpServises"
import { actionType } from "./action-Type"

export const register_post_data = (data) => async (dispatch) => {
    dispatch({
        type: actionType.REGISTER_INSERT,
    })
    httpServices.signUpUser(data).then(response => {
        dispatch({
            type: actionType.REGISTER_INSERT_SUCCESS,
            payload: response
        })
    }).catch(error => {
        dispatch({
            type: actionType.REGISTER_INSERT_FAILURE,
            payload: { error }
        })
        // if (error.response.status == 401) {
        //     alert(error.response.data.error.email)
        // }
        // return false
        // throw error;
    })
}

export const sign_in_user = (data) => async (dispatch) => {
    dispatch({
        type: actionType.LOGININ_USER,
    })
    httpServices.loginUser(data).then(response => {
        dispatch({
            type: actionType.LOGNIN_USER_SUCCESS,
            payload: response
        })
    }).catch(error => {
        dispatch({
            type: actionType.LOGNIN_USER_FAILURE,
            payload: { error }
        })
        // if (error.response.status != undefined) {

        //     if (error.response.status == 401) {
        //         alert(error.response.data.error)
        //         return false
        //     }
        // }
        throw error;
    })
}


export const logout_user = () => {
    // dispatch({
    //     type: actionType.LOGOUT_USER,
    // })
    return {
        type: actionType.LOGOUT_USER_SUCCESS,
        payload: []
    }
    // .catch(error => {
    //     dispatch({
    //         type: actionType.LOGOUT_USER_FAILURE,
    //         payload: { error }
    //     })
    //     throw error;
    // })
}
// export const get_category = () => async (dispatch) => {
//     dispatch({
//         type: actionType.GET_CATEGORYDATA,
//     })
//     httpServices.getCategory().then(response => {
//         dispatch({
//             type: actionType.GET_CATEGORYDATA_SUCCESS,
//             payload: response
//         })
//     }).catch(error => {
//         dispatch({
//             type: actionType.GET_CATEGORYDATA_FAILURE,
//             payload: { error }
//         })

//         throw error;
//     })
// }
export const get_product = () => async (dispatch) => {
    dispatch({
        type: actionType.GET_PRODUCT_DATA,
    })
    httpServices.getProducts().then(response => {
        dispatch({
            type: actionType.GET_PRODUCT_DATA_SUCCESS,
            payload: response
        })
    }).catch(error => {
        dispatch({
            type: actionType.GET_PRODUCT_DATA_FAILURE,
            payload: { error }
        })

        throw error;
    })
}
export const category_post = (checkboxData) => {
    return {
        type: actionType.CATEGORY_SUBCATEGORY_SUCCCESS,
        payload: checkboxData,
    }

}
