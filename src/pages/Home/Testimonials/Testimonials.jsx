import SectionsTitle from "../../../copmonets/SectionTitle/SectionsTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
        .then(data=>setReviews(data))
        
    },[])
    return (
        <section>
            <SectionsTitle
                subHeading={"What our client Say"}
                heading={"testimonials"}></SectionsTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                       
                        <div className="my-16 mx-24 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="my-8">{review.details}</p> 
                            <h3>{review.name }</h3>
                   </div>
                    </SwiperSlide>)
               }
            </Swiper>
        </section>
    );
};

export default Testimonials;