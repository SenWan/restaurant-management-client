import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import '../category/styles.css';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={"From 11.00am to 10.00pm"}
      heading={"Order Online"}
      ></SectionTitle>
      <Swiper
      slidesPerView={5}
      spaceBetween={30}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={slide1}/>
        <h4 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2}/>
        <h4 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3}/>
        <h4 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4}/>
        <h4 className="text-4xl uppercase text-center -mt-16 text-white">Deserts</h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5}/>
        <h4 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h4>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
