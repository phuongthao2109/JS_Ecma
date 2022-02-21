import Axios from "./instance";

export const getAllProducts = async () => {
    try {
        const { data } = await Axios.get("/products");
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getProductsByID = async (id) => {
    try {
        const { data } = await Axios.get("/products");
        return data.find((item) => item.id == id);
    } catch (error) {
        console.error(error);
    }
};

export const deleteProductsByID = async (id) => {
    try {
        const { data } = await Axios.delete(`/products/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};
    
export const createProducts = (params) => {
   
        const response = Axios.post("/products", params);
        return response;

};

export const updateProducts = async (params) => {
    try {
        const response = await Axios.patch(`/products/${params.id}`, params);
        return response;
    } catch (error) {
        console.error(error);
    }
};


export const getAllProductsHavingBrandsCate = async () => {
    try {
        const { data } = await Axios.get("/products?_expand=catePro&_expand=brand");
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getProductsByIDHavingBrandsCate = async (id) => {
    try {
        const { data } = await Axios.get("/products?_expand=catePro&_expand=brand");
        return data.find((item) => item.id == id);
    } catch (error) {
        console.error(error);
    }
};

export const searchProduct = (keyword) => {
    const url = `/products?q=${keyword}`;
    return Axios.get(url);
  };