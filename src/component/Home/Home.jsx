import Banner from "../Banner/Banner";
import HomeBook from "../HomeBook/HomeBook";

const Home = () => {
    return (
        <div className="py-10 md:py-20">
           <Banner></Banner>
           <HomeBook></HomeBook>
        </div>
    );
};

export default Home;