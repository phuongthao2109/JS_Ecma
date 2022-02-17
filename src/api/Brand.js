import Axios from "./instance";
export const getAllBrand = async () => {
   try {
       const { data } = await Axios.get("/brands");
       return data;
   } catch (error) {
       console.error(error);
   }
};

export const createBrands = (params) => {
   
    const response = Axios.post("/brands", params);
    return response;

};


export const updateBrands = async (params) => {
    try {
        const response = await Axios.patch(`/brands/${params.id}`, params);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const deleteBrandsByID = async (id) => {
    try {
        const { data } = await Axios.delete(`/brands/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getBrandsByID = async (id) => {
    try {
        const { data } = await Axios.get("/brands");
        return data.find((item) => item.id == id);
    } catch (error) {
        console.error(error);
    }
};
