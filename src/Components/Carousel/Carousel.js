import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  return (
    <div className="px-4">
      <Swiper
        navigation={false}
        spaceBetween={10}
        effect={"autoplay"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="p-4 text-center  bg-white w-full mx-auto">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-green-400  transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600">
                  "Needless to say we are extremely satisfied with the results.
                  Keep up the excellent work. Your company is truly upstanding
                  and is behind its product 100%. Thanks guys, keep up the good
                  work!"
                </p>
                <div className="text-gray-900 font-bold uppercase mt-6">
                  - jony dfs.
                </div>
                <div className="text-gray-600">Microsoft</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="p-4 text-center  bg-white w-full mx-auto">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-green-400  transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600">
                  "Needless to say we are extremely satisfied with the results.
                  Keep up the excellent work. Your company is truly upstanding
                  and is behind its product 100%. Thanks guys, keep up the good
                  work!"
                </p>
                <div className="text-gray-900 font-bold uppercase mt-6">
                  - Annabell M.
                </div>
                <div className="text-gray-600">Microsoft</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="p-4 text-center  bg-white w-full mx-auto">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-green-400  transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600">
                  "Needless to say we are extremely satisfied with the results.
                  Keep up the excellent work. Your company is truly upstanding
                  and is behind its product 100%. Thanks guys, keep up the good
                  work!"
                </p>
                <div className="text-gray-900 font-bold uppercase mt-6">
                  - lkwerowe M.
                </div>
                <div className="text-gray-600">Microsoft</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="p-4 text-center  bg-white w-full mx-auto">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-green-400  transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600">
                  "Needless to say we are extremely satisfied with the results.
                  Keep up the excellent work. Your company is truly upstanding
                  and is behind its product 100%. Thanks guys, keep up the good
                  work!"
                </p>
                <div className="text-gray-900 font-bold uppercase mt-6">
                  - Annabell M.
                </div>
                <div className="text-gray-600">Microsoft</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Carousel;
