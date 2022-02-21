import { setTitle } from "../../utils/index";
import { signup } from "../../api/auth";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from "jquery";
import jqueryValidate from "jquery-validation";

const SignUp = {
    before_render() {
        setTitle("Sign Up");
    },
    render() {
        return /* html */ `
       <div class="flex items-center justify-center min-h-screen bg-gray-100">
       <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
           <h3 class="text-2xl font-bold text-center">Join us</h3>
           <form action="" id="formSignup">
               <div class="mt-4">
                   <div>
                       <label class="block" for="Name">Name<label>
                       <input type="text" placeholder="Name" name="username" id="username"
                                   class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                   </div>
                   <div class="mt-4">
                       <label class="block" for="email">Email<label>
                       <input type="text" placeholder="Email" name="email" id="email"
                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                   </div>
                   
                   <div class="mt-4">
                       <label class="block">Password<label>
                       <input type="password" placeholder="Password" name="password" id="password"
                                   class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                   </div>
                   <div class="flex">
                       <button id="btn-save-users" class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                           Account</button>
                   </div>
                   <div class="mt-6 text-grey-dark">
                       Already have an account?
                       <a class="text-blue-600 hover:underline" href="/signin">
                           Log in
                       </a>
                   </div>
               </div>
           </form>
       </div>
   </div>
       `;
    },
    after_render() {
        const formSignup = document.querySelector("#formSignup");
        const valid = $("#formSignup").validate({
            rules: {
                username:{
                    required: true,
                    minlength: 6,
                },
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 6,
                },
                messages: {
                    username:{
                        minlength: "Please enter at least 6 characters.",
                        required: "This field is required.",
                    },
                    email: {
                        required: "We need your email address to contact you",
                        email:
                            "Your email address must be in the format of name@domain.com",
                    },
                    password: {
                        password: "Please enter at least 6 characters.",
                        required: "This field is required.",
                    },
                },
            },
        });

        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (valid.errorList.length === 0) {
                try {
                    const { data } = await signup({
                        username: document.querySelector("#username").value,
                        email: document.querySelector("#email").value,
                        password: document.querySelector("#password").value,
                        role: "user", 
                        status: "",
                        address:"",
                        image: "",
                        phone : "",

                    });
                    if(data){
                        toastr.success("signup successfully, redirect after 3s")
                        setTimeout(() =>{
                            document.location.href = "/signin"
                        },3000)
                    }
                } catch (error) {
                    toastr.error("Login failed",error.response.data);
                }
            }
        })
    }
};

export default SignUp;