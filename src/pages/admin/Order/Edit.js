import { update, updateOrder, getOrder, remove,getOrderByProduct } from "../../../api/order";
import { decreaseQuantity, increaseQuantity,removeItemInCart} from "../../../utils/cart";

import { setTitle } from "../../../utils";
import { reRenderUI } from "../../../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { orderTableTemplate } from "../../../utils";
import $ from "jquery";
import validate from "jquery-validation";

const EditOrder = {
  state: {
    data: {},
  },
  async before_render({ id }) {
    const OrderEdit = await getOrder(id);
    this.state.data = OrderEdit
    setTitle(`Edit order: ${this.state.data.ordercode}`);

  },
  render() {
    const data = this.state.data;
    return /* html */ `
    <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
      <div class="w-full">
        <div class="p-6 bg-white w-full">
          <h2 class="text-lg font-semibold text-gray-700 capitalize"> Edit User </h2>

          <form id="update_order">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <input name="id" id="id"  hidden value="${data.id}">

              <div>
                <label class="text-gray-700" for="name_user">Username</label>
                <input name="name_user" id="name_orderupdate"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text" value="${data.name_user}">
              </div>
              <div>
                <label class="text-gray-700" for="emailAddress">Email</label>
                <input name="email" id="email_orderupdate"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="email" value="${data.email}">
              </div>
              <div>
                <label class="text-gray-700" for="password">Phone</label>
                <input name="phone" id="phone_orderupdate"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text" value="${data.phone}">
              </div>
              <div>
                <label class="text-gray-700" for="password">Address</label>
                <input name="address" id="address_orderupdate"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text" value="${data.address}">
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button type="submit" id="btnUpdateUser"
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ">
                Save </button>
            </div>
          </form>


        </div>
        <div id="order_abc" class="p-6 bg-white w-full">
          <table class="w-full border-b border-gray-200">
            <thead>
              <tr class="text-sm font-medium text-gray-700 border-b border-gray-200">
                <td class="pl-10">
                  <div class="flex items-center gap-x-4">
                    <span>Image</span>
                  </div>
                </td>
                <td class="py-4 px-4 text-center">NAME</td>
                <td class="py-4 px-4 text-center">PRICE</td>
                <td class="py-4 px-4 text-center">QUANTITY</td>
                <td class="py-4 px-4 text-center">TOTAL</td>
                <td class="py-4 px-4 text-center">Action</td>
                <td class="py-4 pr-10 pl-4 text-center">
                </td>
              </tr>
            </thead>
            <tbody id="body-order">
              ${data.products
                .map((item) => {
                  return /* html */ `

              <tr v-for="product in products" class="group transition-colors hover:bg-gray-100">
                <td class="flex items-center gap-x-4 py-4 pl-10">
                  <img src="${item.image}" alt=""
                    class="aspect-[3/2] w-40 rounded-lg border border-gray-200 object-cover object-top" />
                </td>
                
                <td name="id" id="id"  hidden value="${data.id}"></td>

                <td class="text-center font-medium">${item.name}</td>
                <td class="text-center font-medium">${item.price}</td>
                <td class="text-center font-medium" class="quantity">${item.quantity}</td>
                <td class="text-center font-medium">${item.quantity * item.price}</td>
                <td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button  data-id="${item.id}" class="btn increase btn-active btn-accent"><i class="fa fa-plus " aria-hidden="true"></i></button>
                  <button  data-id="${item.id}" class="btn decrease btn btn-outline btn-info"><i class="fa fa-minus " aria-hidden="true"></i></</button>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button data-id="${item.id}" class="btn remove"value="btn">Remove</button>
                </td>
               
                </td>
                <td></td>
              </tr>
            
              `;
        })
        .join("")}
            </tbody>
            <td class="form-info">
              <label for="name">Tổng tiền : <span id="total">123</span></label>
              <input type="hidden" id="price-total" name="price-total" >
              <input type="hidden" id="status" value="1">
            </td>
          </table>
          
        </div>
      </div>
    </div>
    `;
  },
  after_render() {
    const formEditUser = document.querySelector("#update_order");
    const btnEditUser = document.querySelector("#btnUpdateUser");

    btnEditUser.onclick = async (e) => {
      e.preventDefault();
      let params = {
        id: formEditUser.id.value,
        name_user: formEditUser.name_orderupdate.value,
        phone: formEditUser.phone_orderupdate.value,
        address: formEditUser.address_orderupdate.value,
        email: formEditUser.email_orderupdate.value
      };
      updateOrder(params).then((res) => {
        toastr.success("Update user i4 success")
      })
    }

     const removeOrder = document.querySelectorAll(".btn");
     const renderOrder = document.querySelector("#body-order");
     

     removeOrder.forEach((rmorder) => {
      const {id} = rmorder.dataset;
     
      rmorder.addEventListener("click",async (e) =>{
        e.preventDefault();
        const OrderEdit = await getOrderByProduct(id);
        console.log("product",OrderEdit);

       
       
      })


     })
    // removeOrder.forEach((rmorder) => {
    //   rmorder.addEventListener("click", async (e) => {
    //     e.preventDefault();
    //     const productId = rmorder.dataset.id;
    //     const { data } = await getOrder(id);
    //     const product = data.product.filter((item) => {
    //       return item.id !== productId;
    //     });

    //     update(id, { ...data, product });
    //     console.log("truoc ");
    //     renderOrder.innerHTML = orderTableTemplate(data);
    //     console.log("sau");

    //     toastr.success("Ban da xoa thanh cong san pham ");
    //     location.reload();
    //   });
    // });




  }
};
export default EditOrder;
