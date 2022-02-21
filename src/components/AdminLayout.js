import NavAdmin from "../components/admin/navAdmin";
import FooterAd from "../components/admin/footer";
 const AdminLayout = (Content) =>{
        return /* html */`
         <div class="min-h-full">
               ${NavAdmin}
            
               <main class="main_content">
               <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <!-- Replace with your content -->
                  <div class="px-4 py-6 sm:px-0">
                     <div class="rounded-lg h-96">
                         ${Content}
                     </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 mt-[100px]">
                     ${FooterAd.render()}
                  <!-- /End replace -->
                  </div>
               </div>
               </main>
         </div>
         `;
    }
    
export default AdminLayout;