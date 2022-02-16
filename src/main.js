import Navigo from "navigo";
import 'flowbite';

import { Render, NoLayout, AdminRender } from "./utils/index";
import HomePage from "./pages/homepage";
import Products from "./pages/product/products";
import ProductDetails from "./pages/product/productDetail";

import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import forgetPass from "./pages/auth/forgetPass";

import DashboardPage from "./pages/admin/dashboard";
import UserList from "./pages/admin/Users/List";
import UserAdd from "./pages/admin/Users/Add";
import UserEdit from "./pages/admin/Users/Edit";

import PostList from "./pages/admin/Posts/List";
import PostAdd from "./pages/admin/Posts/Add";
import PostEdit from "./pages/admin/Posts/Edit";

import Cart from "./pages/cart";
import NotFoundPage from "./pages/NotFoundPage";

const router = new Navigo("/", { linksSelector: "a" });

router.on("/admin/*", () => {}, {
   before: (done) =>{ 
       if(localStorage.getItem('user')){
          
           const userRole = JSON.parse(localStorage.getItem('user')).role;
           if(userRole === 'admin'){
               done();
           } else {
               document.location.href="/"
           }
       }
   }
})

router.on({

   "/": () => Render(HomePage),
   "/product": () => Render(Products),
   "/product/:id": ({ data }) => Render(ProductDetails, data),
   "/cart": () => Render(Cart),

   //auth
   "/signin": () => NoLayout(SignIn),
   "/signup": () => NoLayout(SignUp),
   "/forgetPass" : () => NoLayout(forgetPass),

   //admin
   "/admin": () => AdminRender(DashboardPage),
   "/admin/users": () => AdminRender(UserList),
   "/admin/users/add": () => AdminRender(UserAdd),
   "/admin/users/:id/edit": ({ data }) => AdminRender(UserEdit, data),

   "/admin/posts":() => AdminRender(PostList),
   "/admin/posts/add": () => AdminRender(PostAdd),
   "/admin/posts/:id/edit": ({ data }) => AdminRender(PostEdit, data),



});
router.notFound(() => NoLayout(NotFoundPage));
router.resolve();



