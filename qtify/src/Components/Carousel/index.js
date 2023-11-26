import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Card";
import "./carousel.css";

const Carousel = ({ btnId, data }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation]}
        slidesPerView={8}
        spaceBetween={30}
        //navigation={true}
        navigation={{
          nextEl: `#arrow-left-${btnId}`,
          prevEl: `#arrow-right-${btnId}`,
        }}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id={`arrow-left-${btnId}`} className="arrow-left arrow">
        <img src="/slider-left-button.png" alt="leftIcon" />
      </div>
      <div id={`arrow-right-${btnId}`} className="arrow-right arrow">
        <img src="/slider-right-button.png" alt="rightIcon" />
      </div>
    </div>
  );
};

export default Carousel;
