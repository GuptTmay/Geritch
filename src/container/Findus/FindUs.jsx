import images from '../../constants/images';

const FindUs = () => (
  <div className='px-8 sm:px-16 py-12 sm:py-20 flex flex-col md:flex-row gap-12 justify-center items-center lg:min-h-screen bg-center bg-repeat bg-cover ' style={{ backgroundImage: `url(${images.bg})` }} >

    <div className="flex lg:flex-1 flex-col justify-center items-center lg:items-start gap-4 lg:gap-8">
      <div className="flex flex-col justify-center items-center lg:items-start w-full">
        <p className='font-base text-white text-base sm:text-lg font-bold sm:font-normal'>Contact</p>
        <div>
          <img src={images.spoon} alt="spoon image" />
        </div>
        <div className='text-golden font-base font text-3xl sm:text-4xl lg:text-5xl my-2 sm:my-4'>
          Find us
        </div>
        <p className='font-alt text-grey text-xs text-center md:text-left sm:text-sm my-2 sm:mb-2 sm:mt-8'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>

        <div className='flex flex-col justify-center items-center md:items-start font-base gap-2 my-6'>
          <p className='text-golden text-xl '>Opening Hours</p>
          <p className='font-alt text-white text-xs font-extralight'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='font-alt text-white text-xs font-extralight'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>  
        <a className='bg-golden text-black font-base px-6 py-2 text-sm md:text-md font-bold' href="#Visit">Visit Us</a>
      </div>
    </div>
    
    <div className="flex flex-1 justify-center items-center">
      <img className="w-[15rem] md:w-[28rem] h-auto" src={images.findus} alt="findus image" />
    </div>
  </div>
);

export default FindUs;
