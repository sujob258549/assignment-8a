
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setRedStore } from "../Localstorage/readData";
import { FaArrowLeft } from "react-icons/fa";
import { setwishlish } from "../Localstorage/wishlist";
import { useState } from "react";


const Detailpage = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const parsid = parseInt(id);
    const book = books.find(book => book.bookId === parseInt(id));
    const [count, setCount] = useState(0);
    const [reCount, setreCount] = useState(0);
    const handelRead = () => {
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

    const handelwishlist = () => {
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
        // else {
        //     toast.error('Alrady add to read');
        // }
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
                            <Link onClick={() => handelRead()} className="btn bgColor text-white text-[18px] font-medium  px-5 border-[#23BE0A] borderd border  hover:text-[#23BE0A]">Read</Link>
                            <Link onClick={() => handelwishlist()} className="btn  text-[18px] font-medium text-white border px-5 hover:text-[#59C6D2] borderd bg-[#59C6D2] border-[#59C6D3]">Wishlist</Link>
                            <Link to={'/'}><div className="tooltip font-bold" data-tip="Back to Page">
                                <button className="btn"><FaArrowLeft /></button>
                            </div></Link>
                        </div>

                    </div>
                    <ToastContainer></ToastContainer>
                </div>

            }
        </div>
    );
};

export default Detailpage;