
import { Swiper, SwiperSlide } from "swiper/react";
import"swiper/css"
import { Autoplay } from "swiper/modules";
export default function HeaderSlider() {
    return (
      <>
        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 2000 }}
            loop
          >
            <SwiperSlide>
              <img src="src/assets/photo/film.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/photo/film.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/photo/film.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/photo/film.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/photo/film.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="border-1 border-slate-700" src="src/assets/photo/film.jpg" alt="" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </>
    );
}