import { setTitle } from "../../utils";
import { getAllCate } from "../../api/Cate";
import { getAllBrand } from "../../api/Brand";
import { getAllUsers } from "../../api/users";
import { getAllPost } from "../../api/posts";
import { getAllProducts } from "../../api/products";
import { getAllOrders } from "../../api/order";
const DashboardPage = {
    before_render() {
        setTitle("Dashboard");
    },
    async render() {
        const cate = await getAllCate();
        const brand = await getAllBrand();
        const users = await getAllUsers();
        const products = await getAllProducts();
        const orders = await getAllOrders();
        console.log(orders.data.length);
        const post = await getAllPost();
        return /* html */`
        <div class="hero min-h-full" style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="text-center hero-content text-neutral-content">
            <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
        <div class=" flex shadow stats stats-vertical lg:stats-horizontal justify-between mt-[40px] ">

            <div class="stat">
              <a href="/admin/cate" class="stat-title text-red-600">Cate</a>
              <div class="stat-value">${cate.length}</div>
              <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            
            <div class="stat">
              <a  href="/admin/users" class="stat-title text-red-600">New Users</a>
              <div class="stat-value">${users.length}</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
            
            <div class="stat">
              <a  href="/admin/products" class="stat-title text-red-600">New products</a>
              <div class="stat-value">${products.length}</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div class="stat">
              <a  href="/admin/brands" class="stat-title text-red-600">Brands</a>
              <div class="stat-value">${brand.length}</div>
              <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            
            <div class="stat">
              <a  href="/admin/orders" class="stat-title text-red-600">Orders</a>
              <div class="stat-value">${orders.data.length}</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
            
            <div class="stat">
              <a  href="/admin/posts" class="stat-title text-red-600">New post</a>
              <div class="stat-value">${post.length}</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
            
          </div>
        
        </main>
        `;
    },
    after_render() {

    }
};
export default DashboardPage;