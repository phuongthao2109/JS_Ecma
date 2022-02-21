import Axios from "./instance";
export const getAllCate = async () => {
   try {
       const { data } = await Axios.get("/catePros");
       return data;
   } catch (error) {
       console.error(error);
   }
};

export const createCate = (params) => {
   
    const response = Axios.post("/catePros", params);
    return response;

};


export const updateCate = async (params) => {
    try {
        const response = await Axios.patch(`/catePros/${params.id}`, params);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const deleteCateByID = async (id) => {
    try {
        const { data } = await Axios.delete(`/catePros/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getCateByID = async (id) => {
    try {
        const { data } = await Axios.get("/catePros");
        return data.find((item) => item.id == id);
    } catch (error) {
        console.error(error);
    }
};

export const getCateByIDHomePage = async (id) => {
    try {
        const { data } = await Axios.get(`/products?cateProId=${id}`);
        return data.find((item) => item.cateProId == id);;
    } catch (error) {
        console.error(error);
    }
};

