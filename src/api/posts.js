import Axios from "./instance";

export const getAllPost = async () => {
    try {
        const { data } = await Axios.get("/posts");
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getPostByID = async (id) => {
    try {
        const { data } = await Axios.get("/posts");
        return data.find((item) => item.id == id);
    } catch (error) {
        console.error(error);
    }
};

export const deletePostByID = async (id) => {
    try {
        const { data } = await Axios.delete(`/posts/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const createPost = (params) => {
   
        const response = Axios.post("/posts", params);
        return response;

};

export const updatePost = async (params) => {
    try {
        const response = await Axios.patch(`/posts/${params.id}}`, params);
        return response;
    } catch (error) {
        console.error(error);
    }
};