import banner from '../../assets/image/banner.png'

const Banner = () => {
    return (
        <div>
             <div className='flex md:items-center flex-col-reverse gap-10 md:gap-10 md:flex-row py-14 md:px-10 lg:px-20 px-5   bg-[#e8edec] rounded-xl'>
            <div>
            <h1 className="text-3xl  playfair md:text-5xl lg:leading-[90px] lg:text-7xl font-bold">Books to freshen up your bookshelf</h1>
          
            <button className="texts-xl hover:text-[#23BE0A] hover:border-[#23BE0A] bg-[#23BE0A] text-white text-xl btn font-bold">View The List</button>
            </div>
            <div className=' flex-1 text-center md:text-start'>
                <img className='' src={banner} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;