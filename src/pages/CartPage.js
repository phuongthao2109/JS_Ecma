import checkoutForm from "../components/UI/checkoutForm";
import { setTitle } from "../utils";
import Cart from "../components/UI/cart";
import Header from "../components/UI/header";
const CartPage = {
   before_render() { setTitle("Cart Page") },
   after_render() {
      checkoutForm.after_render();
      Cart.after_render();
      Header.after_render()

   },
   render() {
    
      return /* html */`
         <div class="relative bg-[#1D1D1D] h-[60px] mt-[40px]">
         <div class="min-h-screen bg-slate-50  p-4">
         <div class="grid grid-cols-3 gap-4  rounded-md">
            <div class="col-span-2 shadow-xl bg-white rounded-md">
            ${Cart.render()}
            </div>
            <div class="checkout-box bg-white">
            ${checkoutForm.render()}
            </div>
         </div>
        
        </div>
    `;;
   },
}
export default CartPage;