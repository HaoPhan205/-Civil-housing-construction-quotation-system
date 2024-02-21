import React from 'react'
import Slider from 'react-slick';
import SliderContent from './SliderContent';
import './SliderAnimation.css'

export default function SliderAnimation() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: false,
        nextArrow: false
    };
    return (
        <div className="slider-scroller" data-direction="left" data-speed="slow">
            <Slider {...settings} className="slider-scroller-inner>">
                <SliderContent
                    title="Mẫu thiết kế nhà lệch tầng đẹp"
                    image="https://thietkethicongnhadep.net/wp-content/uploads/2023/03/mau-nha-2-tang-mai-nhat-ndmn2t19-4-534x600.jpg"
                />
                <SliderContent
                    title="55+ Mẫu nhà 2 tầng mái thái"
                    image="https://thietkethicongnhadep.net/wp-content/uploads/2023/03/mau-nha-2-tang-mai-nhat-ndmn2t19-4-534x600.jpg"
                />
                <SliderContent
                    title="40+ Ý tưởng xây nhà mái lệch"
                    image="https://thietkethicongnhadep.net/wp-content/uploads/2023/03/mau-nha-2-tang-mai-nhat-ndmn2t19-4-534x600.jpg"
                />
                <SliderContent
                    title="100+ Mẫu thiết kế biệt thự 1 tầng"
                    image="https://thietkethicongnhadep.net/wp-content/uploads/2023/03/mau-nha-2-tang-mai-nhat-ndmn2t19-4-534x600.jpg"
                />
                <SliderContent
                    title="30+ Mẫu thiết kế nhà phố 3 tầng"
                    image="https://thietkethicongnhadep.net/wp-content/uploads/2023/03/mau-nha-2-tang-mai-nhat-ndmn2t19-4-534x600.jpg"
                />
                <SliderContent
                    title="37+ Mẫu thiết kế nhà ống 2 tầng"
                    image="https://thietkethicongnhadep.net/wp-content/uploads/2023/03/mau-nha-2-tang-mai-nhat-ndmn2t19-4-534x600.jpg"
                />
            </Slider>
        </div>
    )
}
