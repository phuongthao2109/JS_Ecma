import { setTitle } from "../utils/index";
import { listProduct } from "../data";
import Banner from '../components/UI/banner';
import newsletter from "../components/UI/newsletter";

const HomePage = {
    before_render() {
        setTitle("Trang chủ");
    },
    after_render() { },
    newsMapping: listProduct
        .slice(0,8)
        .map((item) => {
            return /* html */ `
            <div class="shadow-lg rounded-lg">
            <a href="/product/${item.slug}">
              <img src="${item.image}" class="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div class="p-5">
              <h3><a href="/product/${item.slug}" class="product_name">${item.name}</a></h3>
              <div class="flex flex-row my-3">
                <div class="${item.color} rounded-full h-5 w-5 shadow-md mr-2"></div>
              </div>
              <div class="flex flex-row my-3">
                <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs cursor-pointer" >${item.size}</a>
              </div>
  
              <div class="flex flex-col xl:flex-row justify-between">
                <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center cursor-pointer" >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to cart
                </a>
                <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="/product/${item.slug}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  View Details
                </a>
              </div>
            </div>
          </div>
           `;
        })
        .join(""),
    render() {

        return /* html */ `
           <div class="mt-4">
             ${Banner}
           </div>

           <div class="item mt-4">
           <div class="my-20">
           <div class="flex flex-row justify-between my-5">
             <h2 class="text-3xl">Men's Collection</h2>
             <a href="/product" class="flex flex-row text-lg hover:text-purple-700">
               View All
               <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
             </a>
           </div>
         <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
           ${this.newsMapping}
           </div>
            <div class="">
                 ${newsletter}
            </div>
       `;
    },
};
export default HomePage;
