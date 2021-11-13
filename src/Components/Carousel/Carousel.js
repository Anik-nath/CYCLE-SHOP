import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const Carousel = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="p-4 text-center  bg-white w-full mx-auto">
            <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-gray-600">
                  "Needless to say we are extremely satisfied with the results.
                  Keep up the excellent work. Your company is truly upstanding
                  and is behind its product 100%. Thanks guys, keep up the good
                  work!"
                </p>
                <div class="text-gray-900 font-bold uppercase mt-6">
                  - jony dfs.
                </div>
                <div class="text-gray-600">Microsoft</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="p-4 text-center  bg-white w-full mx-auto">
            <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-gray-600">
                  "Needless to say we are extremely satisfied with the results.
                  Keep up the excellent work. Your company is truly upstanding
                  and is behind its product 100%. Thanks guys, keep up the good
                  work!"
                </p>
                <div class="text-gray-900 font-bold uppercase mt-6">
                  - Annabell M.
                </div>
                <div class="text-gray-600">Microsoft</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="p-4 text-center  bg-white w-full mx-auto">
            <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-gray-600">
                  "Needless to say we are extremely satisfied with the results.
                  Keep up the excellent work. Your company is truly upstanding
                  and is behind its product 100%. Thanks guys, keep up the good
                  work!"
                </p>
                <div class="text-gray-900 font-bold uppercase mt-6">
                  - lkwerowe M.
                </div>
                <div class="text-gray-600">Microsoft</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Carousel;