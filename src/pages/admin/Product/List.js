import { setTitle } from "../../../utils";
import { getAllProductsHavingBrandsCate } from "../../../api/products";

const ProductList = {

   before_render() { setTitle("Product List") },
   async productsMapping() {
      let productHTml = "";
      try {
         const products = await getAllProductsHavingBrandsCate();
        
         productHTml = products
            .map((item) => {
               return /* html */ `
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <a href="/admin/product/${item.id}/edit"><img class="h-10 w-10 rounded-full" src="${item.image}" alt=""></a>
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900" name="name" id="name">${item.name}</div>
                <div class="text-sm font-medium text-gray-900" name="name" id="name"></div>
              </div>
            </div>
          </td>
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-smq text-gray-900 ml-4" name="price" id="price">${item.price}</div>

          </div>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" name="productCate" id= "productCate"> ${item.catePro.name}</span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500" name="brand" id="brand"> ${item.brand.name} </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/admin/products/${item.id}/edit" class="bg-indigo-600 hover:bg-indigo-700 border border-transparent text-[14px] shadow-sm py-1 px-3 rounded-md text-white">Edit</a>
              <button class="btn-delete-products bg-red-600 hover:bg-red-700 border border-transparent text-[14px] shadow-sm py-1 px-3 rounded-md text-white" data-id=${item.id}>Delete</button>
          </td>
      </tr>
            `;

            })
            .join("");
      } catch (e) {
         console.error(e);
      }
      return productHTml;
   },
   async render() {
         return /* html */ `
         <header class="bg-white shadow">
          <div class="max-w-7x px-4 sm:px-6 lg:px-8 pb-6">
             <!-- This example requires Tailwind CSS v2.0+ -->
             <div class="lg:flex lg:items-center lg:justify-between">
             <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Thêm Mới user</h2>
             </div>
             <div class="mt-5 flex lg:mt-0 lg:ml-4">

                <a href="/admin/products/add" class="sm:ml-3">
                 <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md 
                     shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-indigo-500">
                       <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                       </svg>
                   Thêm mới 
                 </button>
               </a>  
             </div>
             </div>
          </div>
       </header>
       <main>
           <div class="flex flex-col mt-6 pb-10">
             <div class="overflow-x-auto">
                 <div class="pb-2 align-middle inline-block min-w-full">
                     <div class="border overflow-hidden border-b border-gray-200 sm:rounded-lg">
                         <table class="min-w-full divide-y divide-gray-200" id="table-container">
                           <thead class="bg-gray-50">
                           <tr>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Info</th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                             <th scope="col" class="relative px-6 py-3">
                               <span class="sr-only">Edit</span>
                             </th>
                           </tr>
                         </thead>
                         <tbody class="bg-white divide-y divide-gray-200">
                         <tr>
                         ${await this.productsMapping()}
                         </tr>
                       </tbody>
                         </table>
                     </div>
                 </div>
             </div>
          </div>    
       </main>
         `;
      
   },
   after_render() { },
}
export default ProductList;