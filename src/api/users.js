import Axios from "./instance";

export const getAllUsers = async () => {
    try {
        const { data } = await Axios.get("/users");
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getUsersByID = async (id) => {
    try {
        const { data } = await Axios.get("/users");
        return data.find((item) => item.id == id);
    } catch (error) {
        console.error(error);
    }
};

export const deleteUsersByID = async (id) => {
    try {
        const { data } = await Axios.delete(`/users/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const createUsers = async (params) => {
    try {
        const response = await Axios.post("/users", params);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const updateUsers = async (id, params) => {
    try {
        const response = await Axios.put(`/users/${id}`, params);
        return response;
    } catch (error) {
        console.error(error);
    }
};