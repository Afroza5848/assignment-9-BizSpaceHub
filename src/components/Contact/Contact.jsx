import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {


    return (
        <div>
            <div>
            <Helmet>
                <title>Hub | Contact</title>
            </Helmet>
                <section className="py-6 bg-[#ff371719] dark:text-gray-900">
                    <div className="grid lg:max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 mt-8  md:w-full w-10/12 mx-auto  md:py-0 md:px-6">
                            <p className="pt-2 pb-4 text-2xl font-medium roboto" data-aos="fade-right"  data-aos-delay="50" data-aos-duration="1000">A REAL ESTATE OWNERSHIP</p>
                            <h1 className="text-6xl font-bold oswald" data-aos="fade-right"  data-aos-delay="1000" data-aos-duration="1000">CONTACT <span className="text-orange-600">INFO</span></h1>
                            <p className="pt-2 pb-8" data-aos="fade-right"  data-aos-delay="1000" data-aos-duration="1000">For a Happy Living</p>
                            <div className="space-y-4" data-aos="fade-right"  data-aos-delay="2000" data-aos-duration="1000">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span>Fake address, 9999 City</span>

                                </p>
                                <p className="flex items-center" data-aos="fade-right"  data-aos-delay="2300" data-aos-duration="1000">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-2xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>123456789</span>
                                </p>
                                <p className="flex items-center" data-aos="fade-right"  data-aos-delay="2500" data-aos-duration="1000">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-2xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>contact@business.com</span>
                                </p>
                            </div>
                        </div>
                        <section className="p-6 dark:text-gray-800"  data-aos="zoom-in"  data-aos-delay="50" data-aos-duration="1000">
                            <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-lg ">
                                <h2 className="w-full text-6xl font-bold leading-tight oswald ">Contact <span className="text-orange-600">us</span></h2>
                                <div>
                                    <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                                    <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-orange-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                                    <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-orange-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                                    <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-orange-600 dark:bg-gray-100"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-orange-600 focus:dark:ring-orange-600 hover:dark:ring-orange-600 dark:text-gray-50">Send</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </section>

            </div>


            {/* other location */}
            <div className="container mx-auto">
                <div className="text-center mt-24 mb-16">
                    <h2 className="oswald text-5xl font-medium" data-aos="zoom-in"  data-aos-delay="50" data-aos-duration="1000">
                        Other <span className="text-orange-600">Locations</span>
                    </h2>
                    <p className="text-2xl mt-4">Get Loan with the best interest rates</p>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-14">
                        <div className="border border-orange-300 p-10 bg-[#ff37173D] hover:bg-white " data-aos="flip-up"  data-aos-delay="50" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">Los Angeles</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">Fake address, 9999 City</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                        <div className="border border-orange-300 p-10 bg-[#ff371719] hover:bg-white " data-aos="flip-up"  data-aos-delay="1000" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">New York</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">7656 Brickyard Drive Maineville, OH 45039</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                        <div className="border border-orange-300 p-10 bg-[#ff37173D] hover:bg-white " data-aos="flip-up"  data-aos-delay="1500" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">London</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">47 Olive Dr. Southgate, MI 48195</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                        <div className="border border-orange-300 p-10 bg-[#ff371719] hover:bg-white " data-aos="flip-up"  data-aos-delay="2000" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">NewZealand</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">78 5th Ave, New York -10011, USA</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                        <div className="border border-orange-300 p-10 bg-[#ff371719] hover:bg-white " data-aos="flip-up"  data-aos-delay="50" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">Pakistan</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">Fake address, 78p99 City</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                        <div className="border border-orange-300 p-10 bg-[#ff37173D] hover:bg-white " data-aos="flip-up"  data-aos-delay="1000" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">Saudi Arab</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">Fake address, 9999 Arab</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                        <div className="border border-orange-300 p-10 bg-[#ff371719] hover:bg-white " data-aos="flip-up"  data-aos-delay="1500" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">America</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">Fake address, 9999 City</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                        <div className="border border-orange-300 p-10 bg-[#ff37173D] hover:bg-white " data-aos="flip-up"  data-aos-delay="2000" data-aos-duration="1000">
                            <h2 className="text-left text-4xl oswald font-medium mb-8">India</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <FaLocationDot className="text-2xl  text-orange-600 mr-2  sm:mr-6" />


                                    <span className="text-2xl">Fake address, 9999 City</span>

                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span className="text-2xl">123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-3xl  text-orange-600">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span className="text-2xl">contact@business.com</span>
                                </p>
                               
                            </div>
                            <button className="px-8 py-4 border float-start mt-10 mb-10 roboto font-semibold text-xl border-orange-600 hover:bg-orange-600 hover:text-white">View Map</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;