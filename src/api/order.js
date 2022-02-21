import Axios from "./instance";

export const getAllOrders = () => {
  const url = "/orders";
  return Axios.get(url);
};
export const getOrder = (id) => {
  const url = `/orders/${id}`;
  return Axios.get(url);
};
export const addOrder = (post) => {
  const url = "/orders";
  return Axios.post(url, post);
};
export const updateOrder = (post, id) => {
  const url = `/orders/${id}`;
  return Axios.patch(url, post);
};
export const removeOrder = (id) => {
  const url = `/orders/${id}`;
  return Axios.delete(url);
};
