import { Helmet } from "react-helmet-async";
import EstateCards from "../../components/EstateCards/EstateCards";
import Banner from "./Banner/Banner";
import Customer from "../../components/Customer/Customer";
import Team from "../../components/Team/Team";



const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Hub | Home</title>
            </Helmet>
            <div className="">
                <Banner></Banner>
            </div>

            <div className="container mx-auto my-8 py-8">
                <EstateCards></EstateCards>
            </div>
            <div className="bg-[#ff371719]">
                <div className="container mx-auto">
                    <Team></Team>
                </div>
            </div>

            <div className="container mx-auto ">
                <Customer></Customer>
            </div>


        </div>
    );
};

export default Home;