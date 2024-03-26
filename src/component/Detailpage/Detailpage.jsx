import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Detailpage = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId === parseInt(id));
    console.log(book, id)

    const [wistlist, setwistlist] = useState(0);

    const handelwishlist = () => {
        setwistlist( wistlist + 1);
        if (wistlist < 1 ) {
            toast('Alrady add wistlish');
        }
       

    }
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

                        <p className="text-sm font-medium flex">Number of Pages: <span className="font-bold ml-9">{book.totalPages}</span></p>
                        <p className="text-sm font-medium flex">Publisher:<span className="font-bold ml-[90px]"> {book.publisher}</span></p>
                        <p className="text-sm font-medium flex">Year of Publishing:<span className="font-bold ml-8"> {book.yearOfPublishing}</span></p>
                        <p className="text-sm font-medium flex">Rating:<span className="font-bold ml-28">{book.rating}</span> </p>

                        <div className=" flex flex-wrap gap-5 mt-10">
                            <button className="btn text-[18px] font-medium hover:text-white px-5 text-[#59C6D2] border hover:bg-[#59C6D2]  border-[#59C6D2]">Read</button>
                            <button onClick={() => handelwishlist()} className="btn  text-[18px] font-medium text-white border px-5 hover:text-[#59C6D2] bg-[#59C6D2]">Wishlist</button>
                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>

            }
        </div>
    );
};

export default Detailpage;