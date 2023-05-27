import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionsTitle from "../../../copmonets/SectionTitle/SectionsTitle";

const Category = () => {
    return (
        <section>
            <SectionsTitle
                subHeading={"order 11pm to 10pm"}
            heading={"Order Online"}>

            </SectionsTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16">
                <SwiperSlide><img src={slider1} alt="" />
                    <h2 className="text-4xl uppercase text-center -mt-16 text-white">pizzas</h2>
                </SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" />
                    <h2 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h2>
                </SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" />
                    <h2 className="text-4xl uppercase text-center -mt-16 text-white">deserts</h2>
                </SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" />
                    <h2 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h2>
                </SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" />
                    <h2 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h2>
                </SwiperSlide>

            </Swiper>
       </section>
    );
};

export default Category;