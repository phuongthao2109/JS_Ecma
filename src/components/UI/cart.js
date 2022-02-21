import { reRenderUI } from "../../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../../utils/cart";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const Cart = {
  before_render() { },
  render() {

    const cart = JSON.parse(localStorage.getItem("cart"));

    return  /* html */ `
    <table class="min-w-full divide-y divide-gray-200 table-auto rounded-md overflow-hidden" id="table-post">
    <thead class="bg-slate-400">
        <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Ảnh</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tên sản phẩm</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Giá</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Số lượng</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
        </tr>
    </thead>
    <tbody>
        ${cart ? cart.map((item) => /* html */`
            <tr>
                <td class="w-[30px]"><img src="${item.image}" ></img></td>
                <td class="px-6 py-4 whitespace-nowrap capitalize"><a href="#/productDetail/${item.id}"><h1>${item.name}</h1></a></td>
                <td class="px-6 py-4 whitespace-nowrap" class="px-4">${item.price}
                </td>
                <td class="px-6 py-4 whitespace-nowrap" class="px-4">${item.quantity}</td>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button  data-id="${item.id}" class="btn increase btn-active btn-accent"><i class="fa fa-plus " aria-hidden="true"></i></button>
                    <button  data-id="${item.id}" class="btn decrease btn btn-outline btn-info"><i class="fa fa-minus " aria-hidden="true"></i></</button>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button data-id="${item.id}" class="btn remove"value="btn">Remove</button>
                </td>
            </tr>
        `).join("") : "<tr><td class=\"px-6 py-4 whitespace-nowrap\" colspan=\"2\" class=\"text-right\">Không có sản phẩm nào</td></tr>"}
    </tbody>
</table>`;

  },
  after_render() {

    const cart = JSON.parse(localStorage.getItem("cart"));
    const btns = document.querySelectorAll(".btn");
    let total = 0;
    const totalCount = () => {
      for (const item of cart) {
        total += (item.price) * (+item.quantity);
        document.querySelector("#total").innerHTML = total
        document.querySelector("#price-total").value
         = total

      }
    };
    totalCount();

    btns.forEach((btn) => {
      const { id } = btn.dataset;
      btn.addEventListener("click", () => {
        if (btn.classList.contains("increase")) {
          increaseQuantity(id, () => {
            reRenderUI(Cart, "#app");
          });

        } else if (btn.classList.contains("decrease")) {
          decreaseQuantity(id, () => {
            reRenderUI(Cart, "#app");
          });

        } else if (btn.classList.contains("remove")) {
          removeItemInCart(id, () => {
            toastr.success("Bạn đã xóa sản phẩm thành công");
            reRenderUI(Cart, "#app");
          });
        }
      });
    });
  },
};
export default Cart;