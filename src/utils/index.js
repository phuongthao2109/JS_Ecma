import Layout from "../components/Layout";
import AdminLayout from "../components/AdminLayout";

export const setTitle = (title) => {
   window.document.title = title;
};
export const Render = async (component, params) => {
   await component.before_render(params);
   document.getElementById("app").innerHTML = Layout(await component.render());
   await component.after_render();
};

export const AdminRender = async (component, params) => {
   await component.before_render(params);
   document.getElementById("app").innerHTML = AdminLayout(await component.render());
   await component.after_render();
};

export const NoLayout = async (component, params) => {
   await component.before_render(params);
   document.getElementById("app").innerHTML = await component.render();
   await component.after_render();
}
export const reRenderAdmin = async (component, domElement) => {
   if(component){
       document.querySelector(domElement).innerHTML = (await component.render());
       if (component.afterRender) component.afterRender();
   }
 };

 export const reRenderUI = async (component, domElement) => {
   if(component){
       document.querySelector(domElement).innerHTML = await component.render();
       if (component.afterRender) component.afterRender();
   }
 };

Array.prototype.jmap = function(callback) {
      return this.map(callback).join("");
}

export const setLocalStorage = (key, value) => {
   localStorage.setItem(key, JSON.stringify(value));
 };

 export const getLocalStorage = (key) => {
   if (localStorage.getItem(key)) {
     return JSON.parse(localStorage.getItem(key));
   }
 };

 export const $ = (element) =>{ 
   const selectors = document.querySelectorAll(element);
   return selectors.length == 1 ? selectors[0] : selectors
}

export const orderTableTemplate = (data) => {
   console.log("hkkkkh", data);
   return /* html */ `
         ${data.product
           .map((item) => {
             return /* html */ `
 
              <tr
                v-for="product in products"
                class="group transition-colors hover:bg-gray-100"
              >
                <td class="flex items-center gap-x-4 py-4 pl-10">
                 
                  <img
                    src="${item.imageIntro}"
                    alt=""
                    class="aspect-[3/2] w-40 rounded-lg border border-gray-200 object-cover object-top"
                  />
                  
                </td>
                <td class="text-center font-medium">${item.name}</td>
                <td class="text-center font-medium">${item.price}</td>
               
                <td class="text-center font-medium">${item.quantity}</td>
                <td class="text-center font-medium">${
                  item.quantity * item.price
                }</td>
 
              
                <td>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="btn btn-remove h-8 w-8 fill-red-600"
                      data-id="${item.id}"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
                <td></td>
              </tr>;
          
 
        `;
           })
           .join("")}
   `;
 };
 