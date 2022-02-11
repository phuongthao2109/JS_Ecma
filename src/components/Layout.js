import Menu from "./UI/menu";
import Footer from "./UI/footer";
const Layout = (Content) => {
   return /* html */ `
   <div class="container mx-auto p-5">
      <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
         <div class="flex flex-row justify-center">
            <div class="bg-gradient-to-r w-11 h-11 ">
               <a href="/"><img src="/src/asset/logo.jfif" alt="banner" class="w-full rounded-lg" /></a>
            </div>   
            
         </div>
         <div class="menu"> ${Menu}</div>
      </div>
      <div class="">${Content}</div>
      <div class="">${Footer}</div>
`;
};
export default Layout;