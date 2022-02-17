import Axios from "./instance";
export const getAllCate = async () => {
   try {
       const { data } = await Axios.get("/catePros");
       return data;
   } catch (error) {
       console.error(error);
   }
};
