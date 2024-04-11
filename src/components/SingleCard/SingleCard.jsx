import { IoPricetagsSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import PropTypes from 'prop-types';

const SingleCard = ({ card }) => {
    const { image, segment_name, estate_title, price, view_property_button ,description,status} = card;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="relative" src={image} alt="home" /></figure>
            <p className="bg-orange-600 oswald text-white text-xl px-5 py-2 capitalize absolute top-6 left-7 rounded">{status}</p>
            <div className="card-body">
                <h2 className="card-title roboto text-[#444] text-2xl">{estate_title}</h2>
                <div className="flex items-center gap-2">
                    <IoPricetagsSharp className="text-orange-600 text-xl" />
                    <span className='oswald font-bold text-xl  rounded-lg'>{segment_name}</span>
                </div>
                <p>{description.slice(0,140)}......</p>
                <p className='text-3xl roboto flex items-center gap-'><FaDollarSign className="text-orange-600 text-2xl" />{price}</p>
                <div className="card-actions">
                    <button className="btn bg-orange-600 text-white oswald text-xl">{view_property_button}</button>
                </div>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    card: PropTypes.object
};

export default SingleCard;