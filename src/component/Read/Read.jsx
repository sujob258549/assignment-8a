import { IoMan } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
const Read = () => {
    return (
        <div>
            <div className=" flex flex-col md:flex-row gap-10 py-10">
                <div className="w-full md:w-[30%]">
                    <div className="bg-slate-200 p-10 rounded-lg">
                        <figure><img className=" w-full" src='https://assets.materialup.com/uploads/6c0140af-f91d-423b-88f1-fc8c379b1654/preview.jpg' alt="Shoes" /></figure>
                    </div>
                </div>

                <div className=" gap-0 w-full md:w-[70%]">
                    <h2 className="text-2xl playfair p-0">main</h2>
                    <p className="text-sm font-medium -my-2 pb-4"> By :book</p>
                    <div className=" flex gap-4">
                        <h4>Tag</h4>
                        <div className="flex  flex-wrap justify-center md:justify-start items-center">
                            <h2 className="tColor text-sm mr-2 font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#book.tags[0]</h2>
                            <h2 className="tColor text-sm mr-2 font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#book.tags[1]</h2>
                            <h2 className="tColor text-sm mr-2 font-medium  text-center bg-[#c6ecdd5d] px-3 rounded-full py-2 md:py-3 md:px-6">#book.tags[2]</h2>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm font-medium flex">rating <IoMan className="text-xl ml-2 items-center"></IoMan></p>
                        <p className="text-sm ml-5 font-medium flex">rating <GiNetworkBars className="text-xl ml-2 items-center"></GiNetworkBars></p>
                    </div>
                    <hr />
                    <div className="flex  flex-wrap justify-center md:justify-start items-cente">
                        <h2 className=" text-sm mr-2 font-medium text-center text-[#328EFF] bg-[#328eff3a] px-3 rounded-full py-2 md:py-3 md:px-6">#book.tags[0]</h2>
                        <h2 className=" text-sm mr-2 font-medium text-[#FFAC33]  text-center bg-[#ffad3333] px-3 rounded-full py-2 md:py-3 md:px-6">#book.tags[1]</h2>
                        <h2 className="text-sm mr-2 font-medium text-white text-center bgColor px-3 rounded-full py-2 md:py-3 md:px-6">#book.tags[2]</h2>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Read;