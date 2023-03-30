import { Container } from "@/styles/global";

import Bolo1 from "/public/assets/images/bolo1.jpg";
import Bolo2 from "/public/assets/images/bolo2.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Container>
          <SwiperSlide>
            <Image src={Bolo1} alt="" className={styles.image} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Bolo1} alt="" className={styles.image} />
          </SwiperSlide>
        </Container>
      </Swiper>
    </>
  );
};
