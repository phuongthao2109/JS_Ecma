import { setTitle } from "../../../utils";

const UserAdd = {
   before_render() {
      setTitle("UserAdd");
   },
   render() {
      return /*html*/ `  
      <header class="bg-white shadow">
         <div class="max-w-7x px-4 sm:px-6 lg:px-8 pb-6">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
               <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Thêm Mới user</h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
               <a href="/admin/users" class="sm:ml-3">
                     <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md 
                        shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-indigo-500">
                        Danh Sách User
                     </button>
               </a>  
            </div>
            </div>
         </div>
      </header>
      <main>
      <div class="mt-6">
          <div class="mt-5 md:mt-0">
              <form class="pb-10">
                  <div class="border overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">
                              Image ID
                              </label>
                              <input class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="file"/>
                          </div>
                              
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">Email</label>
                              <input type="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          </div>
          
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">Role</label>
                              <input type="text" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          </div>
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">Status</label>
                              <input type="text" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          </div>
                          <div class="mb-3">
                              <label class="block text-sm font-medium text-gray-700">Address</label>
                              <textarea rows="10" class="shadow-sm focus:ring-indigo-500 p-3 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                          </div>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
   after_render() { },

}
export default UserAdd;