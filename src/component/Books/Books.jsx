import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

const Books = () => {

    const [tab, setTab] = useState(0);
    return (
        <div>
            <div className="relative">

                <h2 className="text-3xl fort-bold text-center bg-slate-200 py-5 rounded-lg">Books</h2>

                <div className="w-32 mx-auto z-50 ">
                    <select className="select w-full max-w-xs bgColor text-xl text-white font-medium">
                        <option disabled selected className="text-xl font-medium">Sort By</option>
                        <option>Homer</option>
                        <option>Marge</option>
                    </select>
                </div>

                <div role="tablist" className="tabs w-[90%] z-0 tabs-lifted md:w-[40%] lg:w-[30%] pt-5">
                    <Link to={''}
                        onClick={() => setTab(0)} role="tab" className={`tab border border-black ${tab === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                    <Link to={'wishlist'}
                        onClick={() => setTab(1)} role="tab" className={`tab border border-black ${tab === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>

                </div >
                <hr className=" w-[10%] md:w-[60%] lg:w-[70%] md:block absolute right-0 -bottom-[8px] border border-[#000000d9]" />
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Books;