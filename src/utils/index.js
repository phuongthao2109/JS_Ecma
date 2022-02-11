import Layout from "../components/Layout";
import AdminLayout from "../components/AdminLayout";

export const setTitle = (title) => {
   window.document.title = title;
}; 
export const Render = (component, params) => {
   component.before_render(params);
   document.getElementById("app").innerHTML = Layout(component.render());
   component.after_render();
};

export const AdminRender = (component, params) => {
   component.before_render(params);
   document.getElementById("app").innerHTML = AdminLayout(component.render());
   component.after_render();
};

export const  NoLayout = (component, params) =>{
   component.before_render(params);
   document.getElementById("app").innerHTML = component.render();
}