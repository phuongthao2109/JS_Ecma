import Axios from "./instance";

export const add = (data) => {
  const url = `orders`;
  return Axios.post(url, data);
};
export const list = () => {
  const url = `orders`;
  return Axios.get(url);
};
export const listone = (id) => {
  const url = `orders/?userId=${id}`;
  return Axios.get(url);
};
export const listTotal = () => {
  const url = `orders`;
  return Axios.get(url);
};
export const update = (id, data) => {
  const url = `orders/${id}`;
  return Axios.put(url, data);
};
export const getOrder = (id) => {
  const url = `orders/${id}`;
  return Axios.get(url);
};
export const updateOrder = (id, data) => {
  const url = `orders/${id}`;
  return Axios.put(url, data);
};
export const remove = (id) => {
  const url = `orders/${id}`;
  return Axios.delete(url);
};

export const searchOrder = (text) => {
  const url = `orders?q=${text}`;
  return Axios.get(url);
};
export const sortOrderStatus = (sortType) => {
  console.log("Sort by: ", sortType);
  const url = `orders?status=${sortType}`;
  return Axios.get(url);
};

export const sortOrderTotal = (sortType) => {
  console.log("Sort by: ", sortType);
  const url = `orders?_sort=totalMoney&_order=${sortType}`;
  return Axios.get(url);
};
