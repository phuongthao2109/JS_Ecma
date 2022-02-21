import { setTitle } from "../utils";
import { updateUsers} from "../api/users";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";

const ProFile = {
   state: {
      data: {},
  },
  async before_render() { 
    setTitle("Change Profile Page");
   const ProFile = JSON.parse(localStorage.getItem("user"));
   this.state.data = ProFile;
   console.log("ProFile",ProFile);

   },
   render() {
      const { username, image, id, address,password,email } = this.state.data;
      return /*html*/   `
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" id="formProFile">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                 <input type="hidden" name="id" id="id" value="${id}" >
                  <label class="block text-sm font-medium text-gray-700"> Photo </label>
                  <div class="mt-1 flex items-center">
                  <input type="hidden" name="oldImage" value="${image}">
                    <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <img src="${image}"></img>
                    </span>
                    <input name="image" id="image_users" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="file"/>
                  </div>
                </div>
               
               <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" id="email" name="email" value="${email}" disabled class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-slate-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
               </div>
               <div class="col-span-6">
               <label for="street-address" class="block text-sm font-medium text-gray-700">Name</label>
               <input type="text" id="username" name="username" value="${username}" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
               </div>
               <div class="col-span-6 sm:col-span-4">
               <label for="email-address" class="block text-sm font-medium text-gray-700">Address</label>
               <input type="text" id="address" name="address" value="${address}" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
               </div>
            <div class="col-span-6 sm:col-span-4">
               <label for="email-address" class="block text-sm font-medium text-gray-700">Password</label>
               <input type="password" id="password" name="password" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
               </div>
            
                
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button id="buttonSave" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    </div>
    
    
      `

   }
   ,
   after_render() { 

        const formProFile = document.querySelector("#formProFile");
        const buttonSave = document.querySelector("#buttonSave");

        const CLOUDINARY_API = " https://api.cloudinary.com/v1_1/asm-ph13269/image/upload";
        const CLOUDINARY_PRESET = "m1lkf3uy";

        const userImage = document.querySelector("#image_users");
        buttonSave.onclick = async function (e) {
            e.preventDefault();
            let file = userImage.files[0];
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
                imgurl = formProFile.oldImage.value
            }


              
            
            let params = {
                id: formProFile.id.value,
                username: formProFile.username.value,
                image: imgurl,
                password: formProFile.password.value,
                address: formProFile.address.value,
            };
            updateUsers(params).then(res => {
                formProFile.reset();
                toastr.success("Update users successfully,please login again")

                document.location.href = "/";
            });

        }


   }
}
export default ProFile