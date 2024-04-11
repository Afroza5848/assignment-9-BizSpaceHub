import slide1 from '../../../assets/image/slide1.jpg'
import slide2 from '../../../assets/image/side2.jpg'
import slide3 from '../../../assets/image/slide3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <div className='md:h-[770px] h-[400px] bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl w-full relative'>
                        <img className='md:h-[770px] rounded-2xl h-[400px] w-full absolute mix-blend-overlay' src={slide1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:h-[770px] h-[400px] bg-gradient-to-r from-gray-600 to-slate-600 w-full rounded-2xl relative'>
                        <img className='md:h-[770px] h-[400px] w-full absolute mix-blend-overlay rounded-2xl' src={slide2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:h-[770px] h-[400px] bg-gradient-to-r from-gray-600 rounded-2xl to-slate-600 w-full relative'>
                        <img className='md:h-[770px] h-[400px] w-full absolute mix-blend-overlay rounded-2xl' src={slide3} alt="" />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Banner;