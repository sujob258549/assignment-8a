import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Hader = () => {
    return (
        <div className="container w-[90%] mx-auto py-5">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Hader;