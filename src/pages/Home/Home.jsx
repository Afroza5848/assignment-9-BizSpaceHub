import EstateCards from "../../components/EstateCards/EstateCards";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="">
                <Banner></Banner>
            </div>
            <div className=" my-16">
                <EstateCards></EstateCards>
            </div>
        </div>
    );
};

export default Home;