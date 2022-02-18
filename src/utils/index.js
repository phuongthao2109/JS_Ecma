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

