import { setTitle } from "../../../utils";

import { getProductsByIDHavingBrandsCate, updateProducts } from "../../../api/products";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getAllCate } from "../../../api/Cate";
import { getAllBrand } from "../../../api/Brand";

const ProductEdit = {
  state: {
    data: {},
  },
  async before_render({ id }) {


    setTitle("Product Add Page");
    const ProEdit = await getProductsByIDHavingBrandsCate(id);
    this.state.data = ProEdit;
    console.log("ProEdit", ProEdit);

    const CateList = await getAllCate();
    const BrandList = await  getAllBrand();
    this.categories = CateList;
    this.brands = BrandList;


    setTitle(`Edit: ${this.state.data.name}`);

  },
  render() {
    const { name, image, id, price, desc, short_desc, cateProId, brandId } = this.state.data; // casi doan nay thi k caj cai cate nua a o
    return /*html*/ `
          <header class="bg-white shadow">
          <div class="max-w-7x px-4 sm:px-6 lg:px-8 pb-6">
              <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="lg:flex lg:items-center lg:justify-between">
              <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Edit User</h2>
              </div>
              <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/products" class="sm:ml-3">
                      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md 
                          shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                          focus:ring-offset-2 focus:ring-indigo-500">
                          Danh Sách Sản Phẩm
                      </button>
                </a>  
                <a href="/admin/products/add" class="sm:ml-3">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md 
                    shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-indigo-500">
                    Thêm mới 
                </button>
                </a>  
              </div>
              </div>
          </div>
        </header>
        <main>
   <div class="mt-6">
       <div class="mt-5 md:mt-0">
           <form class="pb-10" id="formEditPro">
               <div class="border overflow-hidden sm:rounded-md">
                   <div class="px-4 py-5 bg-white sm:p-6">
                    <input type="hidden" name="id" id="id" value="${id}" >
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700">
                            Photo
                        </label>
                        <img src="${image}" class="w-64 h-auto rounded-lg mt-1" alt="">
                    </div>
                   <input type="hidden" name="oldImage" value="${image}">
                     <div class="mb-3">
                         <label class="block text-sm font-medium text-gray-700">
                         Image Product
                         </label>
                         <input name="image" id="image_product" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="file"/>
                     </div>
                           
                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">Name</label>
                           <input type="text" name="name" id="name" value="${name}" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                       </div>
                           
                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">Price</label>
                           <input type="text" name="price" id="price" value="${price}"class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                       </div>

                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">short Description</label>
                           <input type="text" name="short_desc" id="short_desc" value="${short_desc}" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                       </div>
       
                      
                       <div class="mb-3">
                             <label class="block text-sm font-medium text-gray-700">Categories</label>
                             <select id="catePro" name="catePro" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value=""></option>
                                    ${this.categories.jmap(cate => {
                                      return `<option value="${cate.id}"  ${cate.id == cateProId ? "selected" : ""}>${cate.name}</option>`
                                   })}
                             </select>
                       </div>

                       <div class="mb-3">
                             <label class="block text-sm font-medium text-gray-700">Brand</label>
                             <select id="brand" name="brand" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"">
                                <option value=""></option>
                                ${this.brands.jmap(brand => {
                                  return `<option value="${brand.id}"  ${brand.id == brandId ? "selected" : ""}>${brand.name}</option>`
                                })}
                             </select>
                       </div>
                       
                       <div class="mb-3">
                           <label class="block text-sm font-medium text-gray-700">Description</label>
                           <textarea rows="3" name="desc" id="desc"class="mt-shadow-sm focus:ring-indigo-500 p-3 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="">${desc}</textarea>
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


    const formEditPro = document.querySelector("#formEditPro");
        const buttonSave = document.querySelector("#btn-save");

        const CLOUDINARY_API = " https://api.cloudinary.com/v1_1/asm-ph13269/image/upload";
        const CLOUDINARY_PRESET = "m1lkf3uy";

        const postImage = document.querySelector("#image_product");

        buttonSave.onclick = async function (e) {
            e.preventDefault();
            let file = postImage.files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            let imgurl = "";
            //call api
            if (file) {
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    }
                })
                imgurl = data.url;
            } else {
                imgurl = formEditPro.oldImage.value
            }
            let params = {
              id:formEditPro.id.value,
              name: formEditPro.name.value,
              image: imgurl,
              price: formEditPro.price.value,
              desc: formEditPro.desc.value,
              short_desc: formEditPro.short_desc.value,
              cateProId: formEditPro.catePro.value,
              brandId: formEditPro.brand.value,

            };
            console.log(params);

            updateProducts(params).then(res => {
            formEditPro.reset();
            document.location.href = "/admin/products";
        });

        }


  }
}
export default ProductEdit;