import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Navber/Footer";

const Hader = () => {
    return (
       <div>
         <div className="container w-[90%] mx-auto py-5 flex flex-col min-h-screen">
            <Navber></Navber>
           
            <Outlet></Outlet>
            
        </div>
        <div className="bg-slate-300">
        <div className="container  w-[90%] mx-auto py-5 flex-grow">
        <Footer></Footer>
        </div>
        </div>
       </div>
    );
};

export default Hader;