import { actionType } from "../action/action-Type";


const intitialAuth = {
    register: [],
    login: [],
}
const intitialProducts = {
    product: [],
}
const intialCategory = {
    subCategory: [],
}
export const registerData = (state = intitialAuth, action) => {
    switch (action.type) {
        case actionType.REGISTER_INSERT:
            return {
                ...state,
                // loading: true
            }
        case actionType.REGISTER_INSERT_SUCCESS:
            return { register: [...state.register, action.payload], loading: true };

        case actionType.REGISTER_INSERT_FAILURE:
            return { register: action.payload, loading: false };


        /*
        |--------------------------------------------------------------------------
        |             LOGIN START
        |--------------------------------------------------------------------------
        */
        case actionType.LOGININ_USER:
            return {
                ...state,
            }

        case actionType.LOGNIN_USER_SUCCESS:
            localStorage.setItem("Token", action.payload.rdata.data.token);
            return { login: action.payload, loading: true };

        case actionType.LOGNIN_USER_FAILURE:
            return { login: action.payload, loading: false };

        // case actionType.LOGOUT_USER:
        //     console.log("first")
        //     return {
        //         ...state,
        //     }
        case actionType.LOGOUT_USER_SUCCESS:
            localStorage.removeItem("Token")
            return { login: action.payload, loading: true };

        // case actionType.LOGOUT_USER_FAILURE:
        //     return { login: action.payload, loading: false };

        default:
            return state;
    }
}

/*
|--------------------------------------------------------------------------
|                      CATEGORY START
|--------------------------------------------------------------------------
*/

// export const categoryData = (state = intitialState, action) => {
//     switch (action.type) {
//         case actionType.GET_CATEGORYDATA:
//             return {
//                 ...state,
//                 // loading: true
//             }
//         case actionType.GET_CATEGORYDATA_SUCCESS:
//             return { ...state, category: action.payload, loading: true };
//         // return { category: action.payload, loading: true };

//         case actionType.GET_CATEGORYDATA_FAILURE:
//             return { ...state, category: action.payload, loading: false };
//         // return { category: action.payload, loading: false };

//         default:
//             return state;
//     }
// }

/*
|--------------------------------------------------------------------------
|                   PRODUCT START
|--------------------------------------------------------------------------
*/

export const productData = (state = intitialProducts, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DATA:
            return {
                ...state,
                // loading: true
            }
        case actionType.GET_PRODUCT_DATA_SUCCESS:
            return { ...state, product: action.payload, loading: true };


        case actionType.GET_PRODUCT_DATA_FAILURE:
            return { ...state, product: action.payload, loading: false };

        default:
            return state;
    }
}

/*
|--------------------------------------------------------------------------
|                   CATEGORY-SUBCATEGORY  START
|--------------------------------------------------------------------------
*/
export const category_data = (state = intialCategory, action) => {
    switch (action.type) {
        // case actionType.CATEGORY_SUBCATEGORY:
        //     return {
        //         ...state,
        //         // loading: true
        //     }
        case actionType.CATEGORY_SUBCATEGORY_SUCCCESS:
            return { subCategory: action.payload, loading: true };

        // case actionType.CATEGORY_SUBCATEGORY_FAILURE:
        //     return { subCategory: action.payload, loading: false };

        default:
            return state;
    }
}
