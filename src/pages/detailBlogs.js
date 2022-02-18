import { getPostByID } from "../api/posts";
import { setTitle } from "../utils";

const BlogDetail = {
   state: {
      data: {},
   },
   after_render() { },
   async before_render({ id }) {
      const blogData = await getPostByID(id);
      this.state.data = blogData;
      setTitle(`Blogs : ${this.state.data.name}`);

   },
   render() {
      const { data } = this.state;
      return /* html */   `
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div class="container">
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
            <div
              class="  relative  rounded overflow-hidden   z-20  mb-[60px]  h-[300px]  md:h-[400px]  lg:h-[500px]  wow  fadeInUp"
              data-wow-delay=".1s
              ">
              <img src="${data.image}" alt="image" class="w-full h-full object-cover object-center" />
              <div class="  absolute  w-full  h-full  top-0  left-0  fle   items-end  z-10  bg-gradient-to-t  from-dark-700  to-transparen ">
                <div class="flex flex-wrap items-center p-4 sm:p-8 pb-4">
                  <div class="flex items-center mb-4 mr-5 md:mr-10">
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-8/12 px-4">
                <div>
                  <h2 class=" font-bold text-dark text-[26px] sm:text-3xl md:text-4xl leading-snug sm:leading-snug md:leading-snu  mb-6 wow fadeInU" data-wow-delay=".1 ">
                    ${data.name}
                  </h2>
                  <p class=" text-base text-body-color
                  leading-relaxed
                  mb-8
                  wow
                  fadeInUp">
                     ${data.short_des}
                  </p>
                  <p  >
                     ${data.desc}
                  </p>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                  <div class="flex flex-wrap items-center -mx-4 mb-12">
                    <div class="w-full md:w-1/2 px-4">
                      <div class=" flex items-center flex-wrap mb-8 md:mb-0 wow fadeInU" data-wow-delay=".1s">
                       
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
              <div>
                <div
                  class="
                    mb-12
                    bg-primary
                    rounded
                    relative
                    overflow-hidden
                    text-center
                    py-[60px]
                    px-11
                    lg:px-8
                    wow
                    fadeInUp
                  "
                  data-wow-delay=".1s
                  "
                >
                  <h3 class="font-semibold text-white mb-2 text-2xl">
                    Join our newsletter!
                  </h3>
                  <p class="text-base text-white mb-8">
                    Enter your email to receive our latest newsletter.
                  </p>
                  <form>
                    <input
                      type="email"
                      placeholder="Your email address"
                      class="
                        w-full
                        text-center
                        h-[50px]
                        text-sm
                        font-medium
                        bg-white bg-opacity-20
                        placeholder-white
                        text-white
                        rounded
                        mb-4
                        outline-none
                        border border-transparent
                        focus-visible:shadow-none
                        focus:border-white
                      "
                    />
                    <input
                      type="submit"
                      value="Subscribe Now"
                      class="
                        w-full
                        text-center
                        h-[50px]
                        text-sm
                        font-medium
                        text-white
                        rounded
                        mb-6
                        bg-[#13C296]
                        cursor-pointer
                        hover:shadow-lg hover:bg-opacity-90
                        transition
                        duration-300
                        ease-in-out
                      "
                    />
                  </form>
                  <p class="text-sm font-medium text-white">
                    Don't worry, we don't spam
                  </p>

                  <div>
                    <span class="absolute top-0 right-0">
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.39737"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 1.39737 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="1.39737"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 1.39737 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 13.6943 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 13.6943 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 25.9911 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 25.9911 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 38.288 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 38.288 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="1.39737"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 1.39737 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 13.6943 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 25.9911 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 38.288 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="1.39737"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 1.39737 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 13.6943 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 25.9911 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 38.288 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                      </svg>
                    </span>
                    <span class="absolute bottom-0 left-0">
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.39737"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 1.39737 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="1.39737"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 1.39737 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 13.6943 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 13.6943 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 25.9911 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 25.9911 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="44.6026"
                          r="1.39737"
                          transform="rotate(-90 38.288 44.6026)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="7.9913"
                          r="1.39737"
                          transform="rotate(-90 38.288 7.9913)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="1.39737"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 1.39737 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 13.6943 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 25.9911 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="32.3058"
                          r="1.39737"
                          transform="rotate(-90 38.288 32.3058)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="1.39737"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 1.39737 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="13.6943"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 13.6943 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="25.9911"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 25.9911 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                        <circle
                          cx="38.288"
                          cy="20.0086"
                          r="1.39737"
                          transform="rotate(-90 38.288 20.0086)"
                          fill="white"
                          fill-opacity="0.44"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="flex flex-wrap -mx-4 mb-8">
                  <div class="w-full px-4">
                    <h2
                      class="
                        font-semibold
                        text-dark text-2xl
                        sm:text-[28px]
                        pb-5
                        relative
                        wow
                        fadeInUp
                      "
                      data-wow-delay=".1s
                      "
                    >
                      Popular Articles
                    </h2>
                    <span
                      class="h-[2px] bg-primary w-20 mb-10 inline-block"
                    ></span>
                  </div>


                  <div class="w-full md:w-1/2 lg:w-full px-4">
                    <div
                      class="
                        w-full
                        flex
                        items-center
                        pb-5
                        mb-5
                        border-b border-[#F2F3F8]
                        wow
                        fadeInUp
                      "
                      data-wow-delay=".1s
                      "
                    >
                      <div
                        class="
                          w-full
                          max-w-[80px]
                          h-20
                          rounded-full
                          overflow-hidden
                          mr-5
                        "
                      >
                        <img
                          src="${data.image}"
                          alt="image"
                          class="w-full"
                        />
                      </div>
                      <div class="w-full">
                        <h4>
                          <a
                            href="javascript:void(0)"
                            class="
                              text-lg
                              lg:text-base
                              xl:text-lg
                              leading-snug
                              font-medium
                              text-dark
                              hover:text-primary
                              mb-1
                              inline-block
                            "
                          >
                            50 Best web design tips & tricks that will help
                            you
                          </a>
                        </h4>
                        <p class="text-sm text-body-color">Samoyel Dayno</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-full px-4">
                    <div
                      class="
                        w-full
                        flex
                        items-center
                        pb-5
                        mb-5
                        border-0 border-[#F2F3F8]
                        md:border-b
                        lg:border-0
                        wow
                        fadeInUp
                      "
                      data-wow-delay=".1s
                      "
                    >
                      <div
                        class="
                          w-full
                          max-w-[80px]
                          h-20
                          rounded-full
                          overflow-hidden
                          mr-5
                        "
                      >
                        <img
                          src="${data.image}"
                          alt="image"
                          class="w-full"
                        />
                      </div>
                      <div class="w-full">
                        <h4>
                          <a
                            href="javascript:void(0)"
                            class="
                              text-lg
                              lg:text-base
                              xl:text-lg
                              leading-snug
                              font-medium
                              text-dark
                              hover:text-primary
                              mb-1
                              inline-block
                            "
                          >
                            The 8 best landing page builders, reviewed
                          </a>
                        </h4>
                        <p class="text-sm text-body-color">Andrio Glori</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="rounded overflow-hidden mb-12 wow fadeInUp"
                  data-wow-delay=".1s"
                >

                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 mt-14 wow fadeInUp" data-wow-delay=".2s">
            <h2 class=" font-semibold text-dark text-2xl sm:text-[28px] pb-5 relativ">
              Related Articles
            </h2>
            <span class="h-[2px] bg-primary w-20 mb-10 inline-block"></span>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div class="mb-10 group wow fadeInUp" data-wow-delay=".1s">
              <div class="rounded overflow-hidden mb-8">
                <a href="#" class="block">
                  <img src="${data.image}" alt="image" class=" w-full transitio group-hover:scale-125 group-hover:rotate-" />
                </a>
              </div>
              <div>
                <span class="bg-primaryrounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-whit mb-">
                  Dec 22, 2023
                </span>
                <h3>
                  <a href="#" class="font-semiboldtext-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primar">
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p class="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Blog Details Section End -->
      `
   }
}
export default BlogDetail;