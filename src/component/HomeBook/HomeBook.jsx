
import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './home.css'

const HomeBook = ({ book }) => {
    const { bookId, image, rating, category, tags, bookName, author } = book;
    return (
        <div className="">
            <NavLink to={`/book/${bookId}`}>
                <div className="card shadows">
                    <div className="bg-slate-200 px-10 mt-10 rounded-lg mx-10">
                        <figure><img className=" w-full " src={image} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body gap-0">
                        <div className="flex gap-3 flex-wrap">
                            <h2 className="tColor text-sm font-medium  text-center bg-[#c6ecdd5d] px-5 rounded-full py-3">{tags[0]}</h2>
                            <h2 className="tColor text-sm font-medium  text-center bg-[#c6ecdd5d] px-5 rounded-full py-3">{tags[1]}</h2>
                        </div>

                        <h2 className="text-2xl playfair p-0">{bookName}</h2>
                        <p className="text-sm font-medium -my-2"> By : {author}</p>
                        <div className="border-dashed border-b  mt-6 border-[#eae5e5a4]">
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm font-medium">{category}</p>
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex">{rating} <CiStar className="text-xl ml-2 items-center"></CiStar></p>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>



        </div>
    );
};

HomeBook.propTypes = {
    book: PropTypes.object
}

export default HomeBook;