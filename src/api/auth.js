import Axios from './instance';

export const signin = async (params) => {
   try {
      const url = "/signin";
      return Axios.post(url, params)
   }catch (error) {
      console.error(error)
   }
 };

 export const signup = async (params) => {
   try {
       const url = "/signup";
       return Axios.post(url, params);

   } catch (error) {
     console.error(error);
   }
}