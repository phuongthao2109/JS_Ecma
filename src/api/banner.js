import Axios from "./instance";
export const getAllBanner = async () => {
   try {
       const { data } = await Axios.get("/banners");
       return data;
   } catch (error) {
       console.error(error);
   }
};

export const createBanner = (params) => {
   
    const response = Axios.post("/banners", params);
    return response;

};


export const updateBanner = async (params) => {
    try {
        const response = await Axios.patch(`/banners/${params.id}`, params);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const deleteBannerByID = async (id) => {
    try {
        const { data } = await Axios.delete(`/banners/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getBannerByID = async (id) => {
    try {
        const { data } = await Axios.get("/banners");
        return data.find((item) => item.id == id);
    } catch (error) {
        console.error(error);
    }
};

export const getBannerByIDHomePage = async (id) => {
    try {
        const { data } = await Axios.get(`/products?cateProId=${id}`);
        return data.find((item) => item.cateProId == id);;
    } catch (error) {
        console.error(error);
    }
};

