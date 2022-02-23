import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { getAllBanner } from "../../api/banner";

const Banner = {

  async render() {
    const allBanner = await getAllBanner();
   
      return /* html */ `
                  <div class="swiper mt-10">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper">
                  ${allBanner.map((banner) =>{
                    return /* html */ `
                      <div class="swiper-slide">
                          <img class="w-full h-[500px] object-cover" src="${banner.image}" alt="" />
                      </div>`

                  })}
                     
                      
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-pagination"></div>
              </div>
              `;


  },
  after_render() {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  before_render() { }
};
export default Banner;
