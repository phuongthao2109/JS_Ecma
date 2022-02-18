import { setTitle } from "../../utils/index";
import { signin } from "../../api/auth";
import toastr from "toastr";
import "toastr/build/toastr.min.css"

const SignIn = {
    before_render() {
        setTitle("Sign In");
    },
    render() {
        return /* html */ `
           <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
               <main>
                   <div class="w-full max-w-sm px-4 py-6 space-y-6 bg-white rounded-md dark:bg-darker">
                       <h1 class="text-xl font-semibold text-center">Login</h1>
                       <form action="#" class="space-y-6" id="formSignin">
                           <input class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100" type="text" name="email" id="email" placeholder="Email" required="">
                           <input class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100" type="password" name="password" id="password" placeholder="Password" required="">
                           <div class="flex items-center justify-between">
                               <div class="flex items-start">
                                   <div class="flex items-center h-5">
                                       <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                   </div>
                                   <div class="ml-3 text-sm">
                                       <label for="comments" class="text-gray-500 cursor-pointer">Remember me</label>
                                   </div>
                               </div>
                               <a href="/forgetPass" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                           </div>
                           <div>
                               <button type="submit" class="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker">
                               Login
                               </button>
                           </div>
                       </form>

                       <div class="flex items-center justify-center space-x-2 flex-nowrap">
                           <span class="w-20 h-px bg-gray-300"></span>
                           <span>OR</span>
                           <span class="w-20 h-px bg-gray-300"></span>
                       </div>
                       <div class="grid grid-cols-3 gap-3 text-xl">
                            <div class="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100 ">
                                <a href="#">  <i class="fab fa-google"></i></a>
                            </div>
                            <div class="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                                <i class="fab fa-linkedin"></i>
                            </div>
                            <div class="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                                <i class="fab fa-github"></i>
                            </div>
                        </div>
                       <div class="text-sm text-gray-600 dark:text-gray-400">
                           Don't have an account yet? <a href="/signup" class="text-blue-600 hover:underline">Register</a>
                       </div>
                   </div>
               </main>
           </div>
       `;
    },
    after_render() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    toastr.success("login successfully, redirect after 3s")
                    setTimeout(() => {
                        document.location.href = "/"
                        localStorage.setItem("user", JSON.stringify(data.user))
                        if(data.user.role == "admin"){
                            document.location.href="/admin"
                        } else {
                            document.location.href="/"
                        }
                    }, 3000)

                }
            } catch (error) {
                toastr.error("Login failed", error.response.data);
            }
        })
    }


};

export default SignIn;