import {searchProduct} from "../../api/products";
   
const Search = {
   before_render() { },
   render() {
      return /* html */ `
         <div class="flex items-center justify-center">
            <div class="flex border-2 rounded">
               <input type="text" id="input_search"  class="px-4 py-2 w-80" placeholder="Search...">
               <button type="submit" class="flex items-center justify-center px-4 border-l" id="search">
                     <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                           d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                     </svg>
               </button>
               <div id="result" class="result bg-slate-100 shadow-xl z-50">
               </div> 
            </div>
         </div>   
      `},
   after_render() {
      const searchBtn = document.querySelector("#search");
      const searchInput = document.querySelector("#input_search");
      const result = document.querySelector("#result");
      searchBtn.addEventListener("click", async () => {
      const item = await searchProduct(searchInput.value);
      
          
      })
   }
}

export default Search;