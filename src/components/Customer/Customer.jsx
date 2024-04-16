//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Customer = () => {

    return (
        <>
            <div className="container flex flex-col items-center mx-auto mb-12 md:max-w-[1000px]  md:p-10 md:px-12">
                <h1 className="p-4 text-4xl font-semibold leading-none text-center oswald">What our customers are saying about us</h1>
                <p className='text-center roboto'>We love talking about technology and we could wax lyrical about all the wonderful things we do for our clients. But we prefer to let our results – and our clients – speak for themselves. So, here’s what our clients say about us. You can even contact them directly and hear it for yourself.</p>
            </div>
            <Swiper
             breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                
              }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'1'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
               
            pagination={{
                clickable: true,
            }}
                //pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            >

            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 mt-10 mb-14 shadow-lg ">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Our OSIT team know our IT situation like the back of their hands and consequently there are minimal issues. When there is a problem, it’s resolved quickly and efficiently.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-orange-600" />
                        <p className="text-xl font-semibold leading-tight">Mark Waite</p>
                        <p className="text-sm uppercase">Youth Futures</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>My experience with Office Solutions goes back to my days.The staff at Office Solutions have always been very professional.I highly recommend this company for all IT-related problems.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                        <p className="text-xl font-semibold leading-tight">Linda Glass</p>
                        <p className="text-sm uppercase">API Management Pty Ltd</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Previously when I had a computer problem I had a feeling of panic. Now, I send in my Support Request to Office Solutions and know that very quickly the problem will be solved and all done remotely.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                        <p className="text-xl font-semibold leading-tight">Liz Pattison</p>
                        <p className="text-sm uppercase">Liz Pattison Pty Ltd</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>We used to get bogged down with IT all the time, but it isn’t an issue anymore. We have a great IT Manager who keeps us up to date, but basically takes care of everything for us.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                        <p className="text-xl font-semibold leading-tight">Kevin Wright</p>
                        <p className="text-sm uppercase">SW Hart & co</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>I have not worked with a better team in my IT career. These guys know IT and have assisted Resources for the last couple of years . They a great bunch of people and we value their input.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                        <p className="text-xl font-semibold leading-tight">Stefan Rheeder</p>
                        <p className="text-sm uppercase">IT Manager - Syrah Resources</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>We rarely have issues with our IT, but when we have run into a problem, we just submit our ticket to Office Solutions knowing that they will get back to us promptly.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-orange-600" />
                        <p className="text-xl font-semibold leading-tight">Raj Thethy</p>
                        <p className="text-sm uppercase">Youth Focus</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Our OSIT team know our IT situation like the back of their hands and consequently there are minimal issues. When there is a problem, it’s resolved quickly and efficiently.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                        <p className="text-xl font-semibold leading-tight">Johan Barrantes</p>
                        <p className="text-sm uppercase">Antipa Minerals Limited</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-orange-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Great bunch and even better service. I can’t fault them. Professional, friendly and always happy to go the extra to make sure your back online and have one less thing to worry about.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-orange-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-orange-600 dark:text-gray-50">
                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-orange-600" />
                        <p className="text-xl font-semibold leading-tight">Paul Mornane</p>
                        <p className="text-sm uppercase">Zorman Real Estate Advocates</p>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper >
        </>

    )

};

export default Customer;