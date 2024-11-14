import { SubHeading } from '../../components';
import images from '../../constants/images'


const Header = () => (
  <div id='Home' className='px-8 sm:px-16 py-12 sm:py-24 bg-black flex flex-col md:flex-row gap-12 sm:gap-24 sm:justify-between items-center lg:min-h-screen '>
    <div className='flex flex-col items-start flex-1'>
      <SubHeading className='flex flex-col items-start max-w-96' majorHead="The Key To Find Dining" minorHead="Chase The New Flavour"/>
      <p className='font-alt text-grey text-xs sm:text-[16px] font-normal leading-5 sm:leading-7 max-w-[20rem] sm:max-w-[25rem] my-2 sm:my-4'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <a className='bg-golden text-black font-base px-3 sm:px-6 py-1 sm:py-2 text-md sm:font-bold mt-2' href="#Menu">Explore Menu</a>
    </div>

    <div className='flex-1 flex justify-center items-center'>
        <img className='w-full h-auto max-w-72 sm:max-w-96 sm:hidden md:block' src={images.welcome} alt="welcome food image" />
    </div>
  </div>
);

export default Header;
