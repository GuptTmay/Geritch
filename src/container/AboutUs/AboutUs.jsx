import images from "../../constants/images";

const AboutUs = () => (
  <div className='px-8 py-12 sm:py-18 bg-cover bg-center bg-repeat flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-20 relative' style={{ backgroundImage: `url(${images.bg})` }} id="About">
    <div className="flex justify-center items-center absolute z-0 w-56 sm:w-72">
      <img src={images.G} alt="G background logo" />
    </div>

    <div className="flex flex-col justify-between items-center md:items-end z-10 -mb-10 md:mb-0">
      <div className='text-golden font-base text-5xl sm:text-6xl my-2 sm:my-4'>About Us</div>
      <img src={images.spoon} alt="spoon image" className="-rotate-180" />
      <p className='font-alt text-grey text-xs sm:text-sm text-center md:text-end font-normal leading-5 sm:leading-6 max-w-[20rem] sm:max-w-[25rem] my-2 sm:my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <a className='bg-golden text-black font-base px-3 sm:px-6 py-1 sm:py-2 text-md sm:font-bold mt-2' href="#About">Know More</a>
    </div>

    <img src={images.knife} alt="knife" className="h-72 sm:h-96 md:h-[30rem] lg:h-[40rem] -rotate-90 md:rotate-1" />

    <div className="flex flex-col justify-between items-center md:items-start z-10 -mt-10 md:mt-0">
      <div className='text-golden font-base text-5xl sm:text-6xl my-2 sm:my-4'>Our History</div>
      <img src={images.spoon} alt="spoon image" />
      <p className='font-alt text-grey text-xs sm:text-sm text-center md:text-start font-normal leading-5 sm:leading-6 max-w-[20rem] sm:max-w-[25rem] my-2 sm:my-4'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
      <a className='bg-golden text-black font-base px-3 sm:px-6 py-1 sm:py-2 text-md sm:font-bold mt-2' href="#About">Know More</a>
    </div>


  </div>
);

export default AboutUs;
