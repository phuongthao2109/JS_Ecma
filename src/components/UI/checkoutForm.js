import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { add } from "../../api/order";
import CartPage from "../../pages/CartPage";
import { reRenderUI } from "../../utils";
import Cart from "./cart";
import $ from "jquery";
import jqueryValidate from "jquery-validation";
import {getLocalStorage} from "../../utils/index";

const checkoutForm = {

  render() {
    const cartCheck = getLocalStorage("cart");
    const userCheck = getLocalStorage("user");
    console.log(userCheck);
      return `
        <h1 class="bg-slate-400 rounded-md overflow-hidden p-2 text-center text-white uppercase">Thông tin thanh toán</h1>
        <form action="" method="post" id="checkout-form" class="bg-white  p-1">
            <div class="form-info">
                <label >Tên người mua</label><br>
                <input type="text" placeholder="Type here" id="name_user" name="name_user" value="" class="input input-bordered input-sm w-full max-w-xs">
            </div>
            <div class="form-info">
                <label >Địa chỉ giao hàng</label><br>
                <input type="text" id="address" placeholder="Nhập địa chỉ giao hàng" value="${userCheck.address ?? ""}" class="input input-bordered input-sm w-full max-w-xs">
            </div>
            <div class="form-info">
              <label>Điện thoại</label><br>
              <input type="number" id="phone" value="${userCheck.phone ?? ""}" placeholder="Nhập địa chỉ giao hàng"  class="input input-bordered input-sm w-full max-w-xs">
          </div>
            <div class="form-info">
                <label>Email</label><br>
                <input type="email" id="email" placeholder="Nhập địa chỉ email" value="${userCheck.email}" ${userCheck ? "disabled" : ""}  class="input input-bordered input-sm w-full max-w-xs border-gray-600">
            </div>

            <div class="form-info">
                <label for="name">Tổng tiền : <span id="total"></span></label>
                <input type="hidden" id="price-total" name="price-total" >
                <input type="hidden" id="status" value="1">
            </div>
            <button id="checkoutBtn" class="btn btn-outline ${cartCheck ? "" : "btn-disabled"} btn-info mt-4">Thanh toán</button>
        </form>
    `;


   
  },
  after_render() {
    function makeid(length) {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random()
          * charactersLength));
      }
      return result;
    }
    const userCheck = getLocalStorage("user");
    const checkout_form = document.querySelector("#checkout-form");
    // const valid = $("#checkout_form").validate({
    //   rules: {
    //     email: {
    //       required: true,
    //       email: true,
    //     },
    //     password: {
    //       required: true,
    //       minlength: 6,
    //     },
    //     phone: {
    //       required: true,
    //       phoneUS: true
    //     },
    //     username: {
    //       required: true,
    //       minlength: 6,
    //     },
    //     address: {
    //       required: true,
    //       minlength: 15,
    //     },
    //     "price-total": {
    //       required: true,
    //     },
    //     messages: {
    //       email: {
    //         required: "We need your email address to contact you",
    //         email:
    //           "Your email address must be in the format of name@domain.com",
    //       },
    //       password: {
    //         password: "Please enter at least 6 characters.",
    //         required: "This field is required.",
    //       },
    //       username: {
    //         required: "We need your name",
    //         minlength: "Give us your name",
    //       },
    //       address: {
    //         minlength: "Give us your address",
    //         required: "This field is required.",
    //       },
    //       total: { required: "Put some products to your cart" }
    //     },
    //   },
    // });
    var date = new Date();
    checkout_form.addEventListener("submit", (e) => {
      e.preventDefault();
        const newOrder = {
          ordercode: makeid(5),
          name_user: document.querySelector("#name_user").value,
          userId: userCheck.id,
          address: document.querySelector("#address").value,
          total: document.querySelector("#price-total").value,
          status: "not approved yet",
          products: JSON.parse(localStorage.getItem("cart")),
          phone: document.querySelector("#phone").value,
          day: date,
          email: document.querySelector("#email").value
        };
        add(newOrder).then(() => {
          toastr.success("Thanh toán thành công");
          localStorage.removeItem("cart");

          
        }).then(() => {
          reRenderUI(CartPage, "#app");
        }).catch((error) => {
          toastr.error(error);
        });
    });

  },
};
export default checkoutForm;