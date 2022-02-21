import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { addOrder } from "../../api/order";
import CartPage from "../../pages/CartPage";
import { reRenderUI } from "../../utils";
import Cart from "./cart";

const checkoutForm = {

  render() {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      return `
          <h1 class="bg-slate-400 rounded-md overflow-hidden p-2 text-center text-white uppercase">Thông tin thanh toán</h1>
          <form action="" method="post" id="checkout-form" class="bg-white  p-1">
              <div class="form-info">
                  <label for="name">Tên người mua</label><br>
                  <input type="text" placeholder="Type here" id="username" value="${localUser.username}" class="input input-bordered input-sm w-full max-w-xs>
              </div>
              <div class="form-info">
                  <label for="address">Địa chỉ giao hàng</label><br>
                  <input type="text" id="address" placeholder="Nhập địa chỉ giao hàng" value="${localUser.address}" class="input input-bordered input-sm w-full max-w-xs>
              </div>
              <div class="form-info">
                <label for="address">Điện thoại</label><br>
                <input type="number" id="phone" placeholder="Nhập địa chỉ giao hàng"  class="input input-bordered input-sm w-full max-w-xs>
              </div>
              <div class="form-info">
                  <label for="email">Email</label><br>
                  <input type="email" id="email" placeholder="Nhập địa chỉ email" value="${localUser.email}" class="input input-bordered input-sm w-full max-w-xs>
              </div>

              <div class="form-info">
                  <label for="name">Tổng tiền : <span id="total"></span></label>
                  <input type="hidden" id="price-total">
                  <input type="hidden" id="status" value="1">
              </div>
              <button id="checkoutBtn" class="btn btn-outline ${localStorage.getItem("cart") ? "" : "btn-disabled"}  btn-info mt-4">Thanh toán</button>
          </form>
      `;
    } else {

      return `
        <h1 class="bg-slate-400 rounded-md overflow-hidden p-2 text-center text-white uppercase">Thông tin thanh toán</h1>
        <form action="" method="post" id="checkout-form" class="bg-white  p-1">
            <div class="form-info">
                <label for="name">Tên người mua</label><br>
                <input type="text" placeholder="Type here" id="username" class="input input-bordered input-sm w-full max-w-xs>
            </div>
            <div class="form-info">
                <label for="address">Địa chỉ giao hàng</label><br>
                <input type="text" id="address" placeholder="Nhập địa chỉ giao hàng"  class="input input-bordered input-sm w-full max-w-xs>
            </div>
            <div class="form-info">
              <label for="address">Điện thoại</label><br>
              <input type="number" id="phone" placeholder="Nhập địa chỉ giao hàng"  class="input input-bordered input-sm w-full max-w-xs>
          </div>
            <div class="form-info">
                <label for="email">Email</label><br>
                <input type="email" id="email" placeholder="Nhập địa chỉ email" class="input input-bordered input-sm w-full max-w-xs>
            </div>

            <div class="form-info">
                <label for="name">Tổng tiền : <span id="total"></span></label>
                <input type="hidden" id="price-total">
                <input type="hidden" id="status" value="1">
            </div>
            <button id="checkoutBtn" class="btn btn-outline ${localStorage.getItem("cart") ? "" : "btn-disabled"} btn-info mt-4">Thanh toán</button>
        </form>
    `;


    }
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
    document.querySelector("#checkout-form").addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newOrder = {
        
        ordercode: makeid(5),
        username: document.querySelector("#username").value,
        address: document.querySelector("#address").value,
        total: document.querySelector("#price-total").value,
        status: +document.querySelector("#status").value,
        products: JSON.parse(localStorage.getItem("cart")),
        phone: document.querySelector("#phone").value,
      };
      addOrder(newOrder).then(() => {
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