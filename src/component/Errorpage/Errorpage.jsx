import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="container mx-auto w-[90%] md:w-[80%]">
            <Link to='/'>
                <img className="w-full h-full md:w-[70%] rounded-xl  mt-9 flex md:h-[80%] mx-auto" src="https://assets.materialup.com/uploads/6c0140af-f91d-423b-88f1-fc8c379b1654/preview.jpg" alt="" />
            </Link>
        </div>
    );
};

export default Errorpage;