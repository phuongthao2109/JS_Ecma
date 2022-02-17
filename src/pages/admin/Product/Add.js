import { setTitle } from "../../../utils";
import axios from "axios";
import { createProducts } from "../../../api/products";
import { getAllCate } from "../../../api/Cate";
import { getAllBrand } from "../../../api/Brand";


const ProductAdd = {
   categories: [],
   brands: [],

   async before_render() {
      setTitle("add new product");
      const CateList = await getAllCate();
      const BrandList = await  getAllBrand();

      this.categories = CateList;
      this.brands = BrandList;

   },
   render() {
      return /*html*/ `
      <header class="bg-white shadow">
      <div class="max-w-7x px-4 sm:px-6 lg:px-8 pb-6">
         <!-- This example requires Tailwind CSS v2.0+ -->
         <div class="lg:flex lg:items-center lg:justify-between">
         <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Thêm Mới Sản Phẩm</h2>
         </div>
         <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <a href="/admin/users" class="sm:ml-3">
                  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md 
                     shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-indigo-500">
                     Danh Sách Sản Phẩm
                  </button>
            </a>  
         </div>
         </div>
      </div>
   </header>
   <main>
   <div class="mt-6">
       <div class="mt-5 md:mt-0">
           <form class="pb-10" id="formAddPro">
               <div class="border overflow-hidden sm:rounded-md">
                   <div class="px-4 py-5 bg-white sm:p-6">
                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">
                           Image Product
                           </label>
                           <input name="image" id="image_product" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="file"/>
                       </div>
                           
                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">Name</label>
                           <input type="text" name="name" id="name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                       </div>
                           
                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">Price</label>
                           <input type="text" name="price" id="price" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                       </div>

                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">short Description</label>
                           <input type="text" name="short_desc" id="short_desc" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                       </div>
       
                      
                       <div class="mb-3">
                             <label class="block text-sm font-medium text-gray-700">Categories</label>
                             <select id="catePro" name="catePro" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"">
                                 <option value="0" disabled selected >Choose Categories</option>
                                    ${this.categories.jmap(cate => {
                                    return `<option value="${cate.id}" >${cate.name}</option>`
                                })}
                             </select>
                       </div>

                       <div class="mb-3">
                             <label class="block text-sm font-medium text-gray-700">Brand</label>
                             <select id="brand" name="brand" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"">
                                 <option value="0" disabled selected >Choose brands</option>
                                    ${this.brands.jmap(brand => {
                                    return `<option value="${brand.id}" >${brand.name}</option>`
                                 })}
                             </select>
                       </div>
                       
                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">Description</label>
                           <textarea rows="3" name="desc" id="desc"class="mt-shadow-sm focus:ring-indigo-500 p-3 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=""></textarea>
                       </div>
                   </div>
                   <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                       <button type="button" id="btn-save" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                           Save
                       </button>
                   </div>
               </div>
           </form>
       </div>
   </div>
   </main>
      `
   },
   after_render() {

      const formAddPro = document.querySelector("#formAddPro");
      const buttonSave = document.querySelector("#btn-save");

      const CLOUDINARY_API = " https://api.cloudinary.com/v1_1/asm-ph13269/image/upload";
      const CLOUDINARY_PRESET = "m1lkf3uy";

      const proImage = document.querySelector("#image_product");

      buttonSave.onclick = function () {
         let file = proImage.files[0];
         const formData = new FormData();
         formData.append('file', file);
         formData.append("upload_preset", CLOUDINARY_PRESET);

         //call api
         axios.post(CLOUDINARY_API, formData, {
            headers: {
               "Content-Type": "application/form-data",
            }
         }).then(res => {

            let params = {
               name: formAddPro.name.value,
               image: res.data.url,
               price: formAddPro.price.value,
               desc: formAddPro.desc.value,
               short_desc: formAddPro.short_desc.value,
               cateProId: formAddPro.catePro.value,
               brandId: formAddPro.brand.value,
            };
           console.log(params);



            createProducts(params).then(res => {
               
               formAddPro.reset();
               document.location.href = "/admin/products";
            })
         })

      }



   }
}
export default ProductAdd;