import { setTitle } from "../../../utils";
import { createPost } from "../../../api/posts";
import axios from "axios";
const PostAdd = {
   before_render() {
      setTitle("Add new post");
   },
   render() {
      return /*html*/ `  
      <header class="bg-white shadow">
         <div class="max-w-7x px-4 sm:px-6 lg:px-8 pb-6">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
               <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Thêm Mới Bài Post</h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
               <a href="/admin/posts" class="sm:ml-3">
                     <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md 
                        shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-indigo-500">
                        Danh Sách 
                     </button>
               </a>  
            </div>
            </div>
         </div>
      </header>
      <main>
      <div class="mt-6">
          <div class="mt-5 md:mt-0">
              <form class="pb-10" id="formAddPosts">
                  <div class="border overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">
                              Image Post
                              </label>
                              <input name="image" id="image_posts" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="file"/>
                          </div>
                              
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">Name</label>
                              <input type="text" name="name" id="name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          </div>
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">Status</label>
                              <select id="status" name="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"">
                                    <option value="0" disabled selected >Choose</option>
                                    <option value="show" >Show</option>
                                    <option value="hidden" >Hidden</option>
                              </select>
                           </div>
                              
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">short desciption</label>
                              <input type="text" name="short_des" id="short_des" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          </div>
                          
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">Desciption</label>
                              <textarea rows="3" name="desc" id="desc" class="mt-shadow-sm focus:ring-indigo-500 p-3 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=""></textarea>
                          </div>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button type="button" id="btn-save-posts" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
        const formAddPosts = document.querySelector("#formAddPosts");
        const buttonSave = document.querySelector("#btn-save-posts");

        const CLOUDINARY_API = " https://api.cloudinary.com/v1_1/asm-ph13269/image/upload";
        const CLOUDINARY_PRESET = "m1lkf3uy";

        const userImage = document.querySelector("#image_posts");

        buttonSave.onclick = function () {
            let file = userImage.files[0];
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
                    name: formAddPosts.name.value,
                    image: res.data.url,
                    short_des : formAddPosts.short_des.value,
                    desc: formAddPosts.desc.value,
                    status: formAddPosts.status.value,
                    
                };

                createPost(params).then(res => {
                    formAddPosts.reset();
                    document.location.href = "/admin/posts";    
                })
            })

        }


   }
}
export default PostAdd;