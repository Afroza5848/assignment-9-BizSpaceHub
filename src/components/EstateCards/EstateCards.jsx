
import { useLoaderData } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";
const EstateCards = () => {
    const cards = useLoaderData();
   
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {
                cards?.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};

export default EstateCards;