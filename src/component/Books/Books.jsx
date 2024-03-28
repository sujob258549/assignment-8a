import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { getwishlish } from "../Localstorage/wishlist";
// import Wishlish from "../Wishlish/Wishlish";

const Books = () => {
     const [tab, setTab] = useState(0);
    // const [books, setBooks] = useState([]);
    // const [allBook, setAllBook] = useState([]);
    // const [sortState, setSortState] = useState("none");

    // useEffect(() => {
    //     fetch('../../../public/book.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBooks(data);
    //             const getdatas = getwishlish();
    //             const allData = getdatas.map(getdata => books.find(book => book.bookId === getdata)).filter(Boolean);
    //             setAllBook(allData);
    //         });
    // }, [books]);

    // useEffect(() => {
    //     const sortedBooks = [...allBook];
    //     if (sortState === "ascending") {
    //         sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
    //     } else if (sortState === "rating") {
    //         sortedBooks.sort((a, b) => a.rating - b.rating);
    //     }
    //     setAllBook(sortedBooks);
    // }, [sortState, allBook]);

    return (
        <div>
            <div className="relative">
                <h2 className="text-3xl fort-bold text-center bg-slate-200 py-5 rounded-lg">Books</h2>
                <div className="w-32 mx-auto z-50 mt-24">
                    {/* <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)} className="select w-full max-w-xs bgColor text-xl text-white font-medium">
                        <option value="DEFAULT" disabled>Sort</option>
                        <option value="none">No work</option>
                        <option value="ascending">Page</option>
                        <option value="rating">Rating</option>
                    </select> */}
                </div>
                <div role="tablist" className="tabs w-[90%] z-0 tabs-lifted md:w-[40%] lg:w-[30%] pt-5">
                    <Link to={''} onClick={() => setTab(0)} role="tab" className={`tab border border-black ${tab === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                    <Link to={'wishlist'} onClick={() => setTab(1)} role="tab" className={`tab border border-black ${tab === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>
                </div >
                <hr className=" w-[10%] md:w-[60%] lg:w-[70%] md:block absolute right-0 -bottom-[8px] border border-[#000000d9]" />
            </div>
            <Outlet></Outlet>
            {/* {
                allBook.map(book => <Wishlish key={book.bookId} book={book}></Wishlish>)
            } */}
        </div>
    );
};

export default Books;
