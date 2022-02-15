import Navigo from "navigo";


import { Render, NoLayout, AdminRender } from "./utils/index";
import HomePage from "./pages/homepage";
import Products from "./pages/product/products";
import ProductDetails from "./pages/product/productDetail";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import DashboardPage from "./pages/admin/dashboard";
import UserList from "./pages/admin/Users/List";
import UserAdd from "./pages/admin/Users/Add";
import UserEdit from "./pages/admin/Users/Edit";
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
   "/product/:slug": ({ data }) => Render(ProductDetails, data),

   //auth
   "/signin": () => NoLayout(SignIn),
   "/signup": () => NoLayout(SignUp),

   //admin
   "/admin": () => AdminRender(DashboardPage),
   "/admin/users": () => AdminRender(UserList),
   "/admin/users/add": () => AdminRender(UserAdd),
   "/admin/users/:id/edit": ({ data }) => AdminRender(UserEdit, data),
});
router.notFound(() => NoLayout(NotFoundPage));
router.resolve();



