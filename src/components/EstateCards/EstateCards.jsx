
import { useLoaderData } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";
const EstateCards = () => {
    const cards = useLoaderData();

    return (
        <div>
            <div className="text-center mt-24 mb-10 w-2/3 mx-auto">
                <h2 className="text-5xl roboto mb-3 font-bold">Featured Properties</h2>
                <p>This fact transfers easily to real estate, where realtors need to communicate with clients quickly and clearly. Following the rules and text message templates below, you too can harness the power of this popular communication style to increase sales and client satisfaction.</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">

                {
                    cards?.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default EstateCards;