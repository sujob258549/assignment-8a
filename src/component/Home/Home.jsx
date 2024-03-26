import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeBook from "../HomeBook/HomeBook";

const Home = () => {
    const books = useLoaderData();
    return (
        <div className="py-10 md:py-20">
            <Banner></Banner>
            <div className="py-10 md:py-14 lg:py-16">
                <h2 className="text-4xl  text-center font-bold playfair pb-6"> Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        books.map(book => <HomeBook key={book.id} book={book}></HomeBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;