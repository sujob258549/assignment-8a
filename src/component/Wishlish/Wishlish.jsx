import { CiLocationOn } from "react-icons/ci";
import { IoMan } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getwishlish } from "../Localstorage/wishlist";
import { useEffect, useState } from "react";
import { BallTriangle } from 'react-loader-spinner'

const Wishlish = () => {
    const [allBook, setAllBook] = useState([]);
    const [loader, setLoader] = useState(true);
    const [sortState, setSortState] = useState("none");

    useEffect(() => {
        // Fetch data from JSON file
        fetch('/book.json')
            .then(res => res.json())
            .then(data => {
                const getdatas = getwishlish();
                const allData = getdatas.map(getdata => data.find(book => book.bookId === getdata)).filter(Boolean);
                
                let sortedBooks = [...allData];
                if (sortState === "totalpage") {
                    sortedBooks.sort((a, b) => a.totalPages - b.totalPages); // Reverse the order for ascending
                } else if (sortState === "rating") {
                    sortedBooks.sort((a, b) => a.rating - b.rating);
                } else if (sortState === "year") {
                    sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                }
                setAllBook(sortedBooks);
               
            });
            setLoader(false);
    }, [sortState]); 

    return (
        <div className="relative">
            <div className='absolute left-[35%] md:left-[45%] -top-32'>
                <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)} className="select w-full max-w-xs bgColor text-xl text-white font-medium">
                    <option value="DEFAULT" disabled>Sort</option>
                    <option value="totalpage">Page</option>
                    <option value="rating">Rating</option>
                    <option value="year">Year</option>
                </select>
            </div>
            <div className="absolute top-[20%] md:top-[200px] left-[35%] md:left-[50%]">
                {loader && <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />}
            </div>

            {allBook.map((book, index) => (
                <div key={index} className="shadow-2xl px-5 md:px-10 md:mt-5 mt-2 -top-2 rounded-md borders">
                    <div className=" flex flex-col md:flex-row gap-10 py-5 md:py-10 items-center ">
                        <div className="w-full md:w-[30%]">
                            <div className="bg-slate-200 p-2 rounded-lg">
                                <figure><img className=" w-full" src={book.image} alt="Shoes" /></figure>
                            </div>
                        </div>

                        <div className=" gap-0 w-full md:w-[70%]">
                            <h2 className="text-2xl playfair p-0 -mt-2">{book.bookName}</h2>
                            <p className="text-sm font-medium -my-2 pb-4"> By : <span className='ml-2'>{book.author}</span> </p>
                            <hr />
                            <div className=" flex gap-4">

                                <h4>Tag</h4>
                                <div className="flex  flex-wrap justify-center md:justify-start items-center">
                                    <h2 className="tColor text-sm mr-2 font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#{book.tags[0]}</h2>
                                    <h2 className="tColor text-sm  font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#{book.tags[1]}</h2>
                                    <p className="text-sm ml-5 font-medium flex gap-2 text-[#131313b0]"> <CiLocationOn className="text-xl ml-2 items-center"></CiLocationOn>Page: {book.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap">
                                <p className="text-sm font-medium flex gap-2  text-[#131313b0]"> <IoMan className="text-xl ml-2 items-center"></IoMan>Publisher: <span className='ml-3'>{book.publisher}</span></p>
                                <p className="text-sm ml-5 font-medium flex gap-2 text-[#131313b0]"> <GiNetworkBars className="text-xl ml-2 items-center"></GiNetworkBars>Page: <span className='ml-1'>{book.totalPages}</span></p>
                            </div>
                            <hr />
                            <div className="flex  flex-wrap justify-center md:justify-start items-cente">
                                <h2 className=" text-sm mr-2 font-medium text-center text-[#328EFF] bg-[#328eff3a] px-3 rounded-full py-2 md:py-3 md:px-6">Category: {book.category}</h2>
                                <h2 className=" text-sm mr-2 font-medium text-[#FFAC33]  text-center bg-[#ffad3333] px-3 rounded-full py-2 md:py-3 md:px-6">Rating: {book.rating}</h2>
                                <Link to={`/book/${book.bookId}`} className="btn hover:text-[#23BE0A] borderd bgColor mt-2 rounded-full text-white">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Wishlish;
