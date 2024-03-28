import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setRedStore } from "../Localstorage/readData";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { setwishlish } from "../Localstorage/wishlist";

const AboutDetail = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const parsid = parseInt(id);

    const book = books.find(book => book.bookId === parsid);
    const [count, setCount] = useState(0);
    const [reCount, setreCount] = useState(0);
    const handleRead = () => {
        if (count < 1) {
            toast.success('Added to read');
            setRedStore(parsid); 
            setCount(count + 1);
        } else if (count === 2) {
            toast.error('Already added to read');
            setCount(count + 1);
        } else {
            if (reCount === 1) {
                toast.success('Added to read');
                setRedStore(parsid);
                setreCount(reCount + 1)
            } else {
                toast.error('Already added to read');
            }
        }
    }

    const handleWishlist = () => {
        if (count === 1) {
            if (reCount === 1) {
                toast.error('Added to wishlist');
            }
            else {
                toast.error('Alrady add to read');
            }
        }
        if (count <= 0) {
            setwishlish(parsid);
            setCount(count + 1);
            setreCount(reCount + 1)
            toast.success('Added to wishlist');
        }
        else if (count === 2) {
            toast.error('Alrady add to read')
        }
    }

  
    return (
        <div>

            {book && (

                <div className="flex gap-10 mt-10 md:mt-20 items-center">
                    <div className="w-full md:w-[33%]">
                        <div className="bg-slate-200 p-10 rounded-lg">
                            <figure><img className="w-full" src={book.image} alt="Shoes" /></figure>

                        </div>
                    </div>

                    <div className="gap-0 w-full md:w-[66%]">
                        <h2 className="text-2xl playfair p-0">{book.bookName}</h2>
                        <p className="text-sm font-medium -my-2 pb-4">By: {book.author}</p>
                        <hr />
                        <p className="text-sm font-medium">{book.category}</p>
                        <hr />
                        <p className="text-sm font-medium"><span className="font-bold">Review</span> {book.review}</p>
                        <div className="flex gap-4">
                            <h4>Tag</h4>
                            <div className="flex flex-wrap justify-center md:justify-start items-center">
                                {book.tags.slice(0, 3).map((tag, index) => (
                                    <h2 key={index} className="tColor text-sm mr-2 font-medium text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#{tag}</h2>
                                ))}
                            </div>
                        </div>
                        <hr />
                        <p className="text-sm font-medium flex">Number of Pages: <span className="font-bold ml-9">{book.totalPages}</span></p>
                        <p className="text-sm font-medium flex">Publisher:<span className="font-bold ml-[90px]"> {book.publisher}</span></p>
                        <p className="text-sm font-medium flex">Year of Publishing:<span className="font-bold ml-8"> {book.yearOfPublishing}</span></p>
                        <p className="text-sm font-medium flex">Rating:<span className="font-bold ml-28">{book.rating}</span> </p>

                        <div className="flex flex-wrap gap-5 mt-10">
                            <button onClick={handleRead} className="btn text-[18px] font-medium hover:text-white px-5 text-[#59C6D2] border hover:bg-[#59C6D2]  border-[#59C6D2]">Read</button>
                            <button onClick={handleWishlist} className="btn text-[18px] font-medium text-white border px-5 hover:text-[#59C6D2] bg-[#59C6D2]">Wishlist</button>
                            <Link to={'/about'}><div className="tooltip" data-tip="Back to Page">
                                <button className="btn"><FaArrowLeft /></button>
                            </div></Link>

                        </div>
                    </div>

                </div>

            )}
            <ToastContainer />
        </div>
    );
};

export default AboutDetail;
