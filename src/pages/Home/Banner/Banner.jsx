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
                    <div className='md:h-[770px] h-[400px] bg-gradient-to-r from-gray-600 to-slate-600  w-full relative'>
                        <img className='md:h-[770px]  h-[400px] w-full absolute mix-blend-overlay' src={slide1} alt="" />
                        <div className='absolute lg:top-40 lg:left-60 top-16 left-10 space-y-6'>
                            <h2 className='oswald lg:text-6xl md:text-4xl text-2xl font-semibold text-white lg:leading-[84px] z-10'>Discover Your Perfect Business <br />Space at <span className='text-orange-700 '>BizSpaceHub</span></h2>
                            <p className='roboto md:text-xl text-gray-200 md:w-10/12 '>Find the ideal commercial property for your business needs at BizSpaceHub. Explore a diverse range of office buildings, retail spaces, warehouses, and more. Unlock your business potential today!</p>
                            <button type="button" className="mt-10 text-white bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  md:px-8 md:py-4 px-5 py-2.5 text-center me-2 mb-2 md:text-xl oswald">Explore Properties</button>
                        </div>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:h-[770px] h-[400px] bg-gradient-to-r from-gray-600 to-slate-600 w-full  relative'>
                        <img className='md:h-[770px] h-[400px] w-full absolute mix-blend-overlay' src={slide2} alt="" />
                        <div className='absolute lg:top-40 lg:left-60 top-16 left-10 space-y-6'>
                            <h2 className='oswald lg:text-6xl md:text-4xl text-2xl font-semibold text-white lg:leading-[84px] z-10'>Elevate Your Business with <br /> <span className='text-orange-700 '>BizSpaceHubs</span> Premier Properties.</h2>
                            <p className='roboto md:text-xl text-gray-200 md:w-10/12 '>Experience unparalleled success with our exclusive selection of commercial properties. From sleek office towers to bustling retail plazas, BizSpaceHub has the perfect space to propel your business forward.</p>
                            <button type="button" className="mt-10 text-white bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  md:px-8 md:py-4 px-5 py-2.5 text-center me-2 mb-2 md:text-xl oswald">Explore Properties</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:h-[770px] h-[400px] bg-gradient-to-r from-gray-600 to-slate-600 w-full relative'>
                        <img className='md:h-[770px] h-[400px] w-full absolute mix-blend-overlay' src={slide3} alt="" />
                        <div className='absolute lg:top-40 lg:left-60 top-16 left-10 space-y-6'>
                            <h2 className='oswald lg:text-6xl md:text-4xl text-2xl font-semibold text-white lg:leading-[84px] z-10'>Your Gateway to Prime Commercial <br /> Real Estate: <span className='text-orange-700 '>BizSpaceHub</span></h2>
                            <p className='roboto md:text-xl text-gray-200 md:w-10/12 '>Step into a world of opportunity with BizSpaceHubs curated collection of commercial properties. Whether you are seeking a flagship office location or a vibrant retail storefront, we connect you with the spaces that inspire growth and innovation.</p>
                            <button type="button" className="mt-10 text-white bg-gradient-to-br from-orange-500 to-orange-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  md:px-8 md:py-4 px-5 py-2.5 text-center me-2 mb-2 md:text-xl oswald">Explore Properties</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;