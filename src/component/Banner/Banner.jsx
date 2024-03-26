import banner from '../../assets/image/banner.png'

const Banner = () => {
    return (
        <div>
             <div className='flex flex-col md:flex-row items-center py-14 md:py-20  lg:px-20'>
            <div className=''>
            <h1 className="text-3xl  playfair md:text-5xl lg:leading-[90px] lg:text-7xl font-bold">Books to freshen up your bookshelf</h1>
          
            <button className="texts-xl text-xl btn font-bold">View The List</button>
            </div>
            <div className='flex-1'>
                <img src={banner} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;