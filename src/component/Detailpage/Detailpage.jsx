import { useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const Detailpage = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId === parseInt(id));
    console.log(book, id)
    return (
        <div>
            {
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="">
                        <div className="bg-slate-200 p-10 rounded-lg">
                            <figure><img className=" w-full" src={book.image} alt="Shoes" /></figure>
                        </div>
                    </div>

                    <div className=" gap-0">
                        <h2 className="text-2xl playfair p-0">{book.bookName}</h2>
                        <p className="text-sm font-medium -my-2 pb-4"> By : {book.author}</p>
                        <hr />
                        <p className="text-sm font-medium">{book.category}</p>
                        <hr />
                        <p className="text-sm font-medium"><span className="font-bold">Review</span> {book.review}</p>
                        <div className=" flex gap-4">
                            <h4>Tag</h4>
                            <div className="flex  flex-wrap justify-center md:justify-start items-center">
                            <h2 className="tColor text-sm mr-2 font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#{book.tags[0]}</h2>
                            <h2 className="tColor text-sm mr-2 font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#{book.tags[1]}</h2>
                            <h2 className="tColor text-sm mr-2 font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#{book.tags[2]}</h2>
                            </div>
                        </div>

                       <hr />
                        
                            <p className="text-sm font-medium flex">Number of Pages: <span className="font-bold ml-5">{book.totalPages}</span></p>
                            <p className="text-sm font-medium flex">Publisher:<span className="font-bold ml-[98px]"> {book.publisher}</span></p>
                            <p className="text-sm font-medium flex">Year of Publishing:<span className="font-bold ml-8"> {book.yearOfPublishing}</span></p>
                            <p className="text-sm font-medium flex">Rating:<span className="font-bold ml-28">{book.rating}</span> </p>

                        </div>
                    </div>
               
            }
        </div>
    );
};

export default Detailpage;