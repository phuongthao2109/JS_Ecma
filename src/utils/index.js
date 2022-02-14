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

export const NoLayout = (component, params) => {
   component.before_render(params);
   document.getElementById("app").innerHTML = component.render();
}

export const ApiGet = async (url) => {
   const response = await fetch(url);
   return response.json();
};


export const ApiPost = async (url, body) => {
   const params = {
      method: "POST",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify(body),
   };
   const response = await fetch(url, params);
   return response.json();
};

export const ApiPut = async (url, body) => {
   const params = {
      method: "PUT",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify(body),
   };
   const response = await fetch(url, params);
   return response.json();
};