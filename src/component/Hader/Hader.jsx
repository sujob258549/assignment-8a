import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Navber/Footer";

const Hader = () => {
    return (
       <div>
         <div className="container w-[90%] mx-auto py-5">
            <Navber></Navber>
           
            <Outlet></Outlet>
            
        </div>
        <div className="bg-slate-300">
        <div className="container  w-[90%] mx-auto py-5">
        <Footer></Footer>
        </div>
        </div>
       </div>
    );
};

export default Hader;