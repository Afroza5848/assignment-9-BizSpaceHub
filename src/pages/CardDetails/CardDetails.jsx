import { useParams, useLoaderData } from 'react-router-dom';
import { IoPricetagsSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import 'animate.css';

const CardDetails = () => {
    const cards = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);
    const { image, segment_name, estate_title, price, location, description, area, status, facilities } = card;
    return (
        <div className="container mx-auto px-2">
            <Helmet>
                <title>Hub Details: {id}</title>
            </Helmet>
            <div className="animate__animated animate__bounce w-full py-12 bg-base-200 rounded-2xl border-b-4 border-orange-600 shadow-lg ">
                <h2 className="animate__animated animate__fadeInDownBig text-center text-5xl oswald font-medium">Featured</h2>
            </div>


            <div className="card lg:card-side bg-base-100 mb-20 lg:mt-20 mt-10 gap-10 ">

                <figure className='animate__animated animate__bounceInLeft animate__delay-1s lg:w-[150%] h-full'><img className='relative z-10 rounded-2xl w-full h-full' src={image} alt="home" /></figure>
                {/* <p className='w-80 h-64 lg:flex hidden bg-orange-600 absolute -top-8 -left-8'></p> */}

                <div className="animate__animated animate__bounceInRight animate__delay-1s">
                    <h2 className="card-title roboto text-[#444] text-2xl">{estate_title}</h2>
                    <div className="flex items-center gap-2 border-b border-gray-200 pb-6">
                        <IoPricetagsSharp className="text-orange-600 text-xl" />
                        <span className='oswald font-bold text-xl  rounded-lg'>{segment_name}</span>
                    </div>
                    <p className='border-b border-gray-200 py-4'>{description}</p>
                    <div className='flex md:flex-row flex-col md:items-center gap-6 text-xl my-5'>
                        <p className='flex items-center gap-2'><FaLocationDot className='text-orange-600' />{location}</p>
                        <p className='flex items-center gap-2'><FaChartArea className='text-orange-600' />{area}</p>
                        <p className='text-orange-600 oswald'>For {status}</p>
                    </div>
                    <div className='my-4'>
                        <h2 className='text-2xl oswald mb-2'>Facilities</h2>
                        <div className='flex md:flex-row flex-col md:items-center md:w-full w-[50%] text-center gap-4'>
                            {
                                facilities.map((facility, idx) => <p className=' font-medium roboto text-orange-600 bg-[#ff371719] px-6 py-2 rounded-full' key={idx}>{facility}</p>)
                            }
                        </div>
                    </div>
                    <p className='text-3xl roboto flex items-center text-orange-600'><FaDollarSign className=" text-2xl" />{price}</p>

                </div>
            </div>
        </div>

    );
};

export default CardDetails;