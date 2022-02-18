import { getAllPost } from "../api/posts";
import { setTitle } from "../utils";
const News = {
   before_render() {
      setTitle("Blog Page");
   },
   async render() {
      return /* html */ `
        <div class="my-20">
        <div class="flex flex-row justify-between my-5">
        </div>
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        ${await this.BlogMapping()}
        `;
   },
   after_render() { },

   async BlogMapping() {
      let blogHtml = "";
      try {
         const products = await getAllPost();
         blogHtml = products
            .slice(0, 8)
            .map((item) => {
               return /* html */ `
              
              <div class="shadow-lg rounded-lg">
               <a href="/blogs/${item.id}">
                  <img src="${item.image}" class="rounded-tl-lg rounded-tr-lg" />
               </a>
              <div class="p-5">
                
                  <span class=" bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb- ">
                     Dec 22, 2023
                  </span>
               <h4>
                  <a href="/blogs/${item.id}" class=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2x  mb-4 inline-block text-dar  hover:text-primary">
                     ${item.name}
                  </a>  
               </h4>
               <p class="text-base text-body-color">
                     ${item.short_des}
               </p>
              </div>
              
            </div>
             `;
            })
            .join("");
      } catch (error) {
         console.error(error);
      }
      return blogHtml;
   },
};

export default News;