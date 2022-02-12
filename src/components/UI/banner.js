import { listBanner } from "../../data/listBanner";
const Banner = () => {
    const bannerMapping = listBanner
        .map((item) => {
            return /* html */ `
             <div class="md:flex md:flex-row mt-20 bg-red">
                          <div class="md:w-2/5 flex flex-col justify-center items-center">
                             <h2 class="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">Some Catchy Title Here</h2>
                             <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Our brand tagline goes here.</p>
                             <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Our brand motto goeshere.</p>
                             <a href="#"class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">ShopNow</a>
                          </div>
                          <div class="md:w-3/5">
                                 <a href="${item.src}">
                                     <img src="${item.image}" alt="banner" class="w-full" />
                                 </a>
                          </div>
                       </div>
       `;
        })
        .join("");

    return bannerMapping;
};

export default Banner();