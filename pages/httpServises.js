import httpCommon from "./http-common";

const signUpUser = async (data) => {
    // let result = await httpCommon.get("/user-list?email=" + data.email);
    // if (result.data.length != 0) {
    //     const myData = { status: 0, rdata: [], message: "Email Already exist" };
    //     return myData;
    // }

    var insert_data = await httpCommon.post("/signup-user", data);
    // console.log(insert_data)
    // const insert_data_result = {
    //     status: 1,
    //     rdata: insert_data.data,
    //     message: "User successfull register",
    // };
    return insert_data;
};

const loginUser = async (loginData) => {
    var result = await httpCommon.post("/signin-user", loginData);

    const data = {
        status: 1,
        rdata: result,
        message: "✔️ Login Successfull",
    };
    return data;
};

const addCategory = async (addCategoryData) => {
    console.log(addCategoryData)
    var result = await httpCommon.post("/category", addCategoryData);
    const data = {
        status: 1,
        rdata: result,
        message: "✔️ Category Added Successfully",
    };
    return data;
}
const getCategory = async () => {
    var result = await httpCommon.get("/category");
    return result;
};
const deleteCategory = async (id) => {
    var result = await httpCommon.delete(`/category${id}`);
    return result;
};
const getProducts = async () => {
    var result = await httpCommon.get("/product");
    return result;
};
const getProductsbyCategory = async (data) => {
    var result = await httpCommon.get(`/product?category=${data}`);
    return result;
};

const httpServices = {
    signUpUser,
    loginUser,
    addCategory,
    getCategory,
    deleteCategory,
    getProducts,
    getProductsbyCategory
}
export default httpServices;
