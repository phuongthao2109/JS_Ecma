import Navigo from "navigo";
import 'flowbite';
import { Render, NoLayout, AdminRender } from "./utils/index";

import HomePage from "./pages/homepage";
import Products from "./pages/product/products";
import ProductDetails from "./pages/product/productDetail";

import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import forgetPass from "./pages/auth/forgetPass";
import ProFile from "./pages/profile";

import Blogs from "./pages/blogs"; 
import BlogDetail from "./pages/detailBlogs";

import DashboardPage from "./pages/admin/dashboard";
import UserList from "./pages/admin/Users/List";
import UserAdd from "./pages/admin/Users/Add";
import UserEdit from "./pages/admin/Users/Edit";

import PostList from "./pages/admin/Posts/List";
import PostAdd from "./pages/admin/Posts/Add";
import PostEdit from "./pages/admin/Posts/Edit";

import ProductList from "./pages/admin/Product/List";
import ProductAdd from "./pages/admin/Product/Add";
import ProductEdit from "./pages/admin/Product/Edit";

import BrandsList from "./pages/admin/Brands/List";
import BrandsAdd from "./pages/admin/Brands/Add";
import BrandsEdit from "./pages/admin/Brands/Edit";

import CateList from "./pages/admin/Categories/List";
import CateAdd from "./pages/admin/Categories/Add";
import CateEdit from "./pages/admin/Categories/Edit";

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
   "/blogs" : () =>Render(Blogs),
    "/blogs/:id": ({ data }) => Render(BlogDetail, data),

   //auth
   "/signin": () => NoLayout(SignIn),
   "/signup": () => NoLayout(SignUp),
   "/forgetPass" : () => NoLayout(forgetPass),
   "/proFile": () => Render(ProFile),

   //admin
   "/admin": () => AdminRender(DashboardPage),
   "/admin/users": () => AdminRender(UserList),
   "/admin/users/add": () => AdminRender(UserAdd),
   "/admin/users/:id/edit": ({ data }) => AdminRender(UserEdit, data),

   "/admin/posts":() => AdminRender(PostList),
   "/admin/posts/add": () => AdminRender(PostAdd),
   "/admin/posts/:id/edit": ({ data }) => AdminRender(PostEdit, data),

   "/admin/products":() => AdminRender(ProductList),
   "/admin/products/add": () => AdminRender(ProductAdd),
   "/admin/products/:id/edit": ({ data }) => AdminRender(ProductEdit, data),

    "/admin/brands" :() => AdminRender(BrandsList),
    "/admin/brands/add" : () => AdminRender(BrandsAdd),
    "/admin/brands/:id/edit": ({ data }) => AdminRender(BrandsEdit, data),

    "/admin/cate" :() => AdminRender(CateList),
    "/admin/cate/add" : () => AdminRender(CateAdd),
    "/admin/cate/:id/edit": ({ data }) => AdminRender(CateEdit, data),

    

});
router.notFound(() => NoLayout(NotFoundPage));
router.resolve();



