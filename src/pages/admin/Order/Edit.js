import { update, updateOrder, getOrder, remove } from "../../../api/order";
import {setTitle} from "../../../utils";
import { reRenderUI } from "../../../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { orderTableTemplate } from "../../../utils";
import $ from "jquery";
import validate from "jquery-validation";

const EditOrder = {
  async render(id) {
    // console.log("Id", id);

    const { data } = await getOrder(id);

    return /* html */ `
    
       <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
      
            <div class="w-full">
            <div class="p-6 bg-white w-full">
            <h2 class="text-lg font-semibold text-gray-700 capitalize"> Edit User </h2>
           
                 <form id="update_order">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                <label class="text-gray-700" for="username">Username</label>
                <input name="username" id="name_orderupdate" class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" type="text" value="${
                  data.name_user
                }">
                </div>
                <div>
                <label class="text-gray-700" for="emailAddress">Email</label>
                <input name="email" id="email_orderupdate" class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" type="email" value="${
                  data.email
                }">
                </div>
                <div>
                <label class="text-gray-700" for="password">Phone</label>
                <input name="phone" id="phone_orderupdate"class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" type="text" value="${
                  data.phone
                }">
                </div>
                <div>
                <label class="text-gray-700" for="password">Address</label>
                <input name="address" id="address_orderupdate" class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" type="text" value="${
                  data.address
                }">
                </div>
                 
               
            </div>
            <div class="flex justify-end mt-4">
                <button type="submit" class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 "> Save </button>
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
            
            
          
            <td class="py-4 px-4 text-center">CUSTOM</td>
            <td class="py-4 pr-10 pl-4 text-center">
              
            </td>
          </tr>
        </thead>
        <tbody id="body-order">
        ${data.product
          .map((item) => {
            return /* html */ `

             <tr
               v-for="product in products"
               class="group transition-colors hover:bg-gray-100"
             >
               <td class="flex items-center gap-x-4 py-4 pl-10">
                
                 <img
                   src="${item.image}"
                   alt=""
                   class="aspect-[3/2] w-40 rounded-lg border border-gray-200 object-cover object-top"
                 />
                 
               </td>
               <td class="text-center font-medium">${item.name}</td>
               <td class="text-center font-medium">${item.price}</td>
              
               <td class="text-center font-medium">${item.quantity}</td>
               <td class="text-center font-medium">${
                 item.quantity * item.price
               }</td>

             
               <td>
                 <button>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="btn btn-remove h-8 w-8 fill-red-600"
                     data-id="${item.id}"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                     />
                   </svg>
                 </button>
               </td>
               <td></td>
             </tr>;
         

       `;
          })
          .join("")}
        
           
         
          
        </tbody>
      </table>
       


           
            </div>
        </div>
       
                    
    </div>



       `;
  },
  afterRender(id) {
    $("#update_order").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          number: true,
        },
        address: {
          required: true,
        },
      },
      messages: {
        username: {
          required: "This field is required.",
        },
        email: {
          required: "This field is required.",
          email: "Please enter a valid email address.",
        },
        phone: {
          required: "This field is required.",
          number: "Please enter a valid number.",
        },
        address: {
          required: "This field is required.",
        },
      },
    });
    const updateOrder = document.querySelector("#update_order");
    updateOrder.addEventListener("submit", async (e) => {
      e.preventDefault();

      if($("#update_order").validate().errorList.length == 0){
        const { data: updatedetailOrder } = await getOrder(id);

        update(id, {
          ...updatedetailOrder,
          name: document.querySelector("#name_orderupdate").value,
          email: document.querySelector("#email_orderupdate").value,
          phone: document.querySelector("#phone_orderupdate").value,
          address: document.querySelector("#address_orderupdate").value,
        });
        toastr.success("Edit thanh cong")

      }
      
    });
    const removeOrder = document.querySelectorAll(".btn");
    const renderOrder = document.querySelector("#body-order");
    removeOrder.forEach((rmorder) => {
      rmorder.addEventListener("click", async (e) => {
        e.preventDefault();
        const productId = rmorder.dataset.id;
        const { data } = await getOrder(id);
        const product = data.product.filter((item) => {
          return item.id !== productId;
        });

        update(id, { ...data, product });
        console.log("truoc ");
        renderOrder.innerHTML = orderTableTemplate(data);
        console.log("sau");

        toastr.success("Ban da xoa thanh cong san pham ");
        location.reload();
      });
    });
  },
  before_render() {setTitle("Edit Order")}
};
export default EditOrder;
