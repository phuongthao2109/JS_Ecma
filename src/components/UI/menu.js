import { reRenderUI } from "../../utils/index";
import Header from "./header";
const Menu = {
    before_render() { },
    render() {
        return /* html */ `
         <div class="mt-2 " id="menu">
            <a href="/" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Home</a>
            <a href="/product" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Shop</a>
            <a href="/blogs" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Blog</a>
            <a href="/cart" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Cart</a>
            
            <a href="/signin" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" id="logout">login</a>
            <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4 uppercase" id="username"></a>
            
          
         </div>
    `;

    },
    after_render() {

        const username = document.querySelector("#username");
        const logout = document.querySelector("#logout");

        const userLogin = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false

        if (userLogin) {
            if (username) username.innerHTML = userLogin.username;
            if (logout) {
                logout.innerHTML = "Logout"
                logout.href = ""
                logout.addEventListener('click', function () {
                    localStorage.removeItem('user');
                    reRenderUI(Header, "#header");
                    toastr.success("Logout thành công")
                })
            }
        }


       



    }

};

export default Menu;