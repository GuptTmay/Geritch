import PropTypes from "prop-types";
import images from "../../constants/images"
import { FiInstagram } from "react-icons/fi";

const Gallery = () => (
  <div className='px-4 sm:px-8 py-8 lg:pr-0 bg-black flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-4'>

    <div className="flex flex-col justify-center items-center lg:items-start">
      <p className='font-base text-white text-base sm:text-lg font-bold sm:font-normal'>Instagram</p>
      <img src={images.spoon} alt="spoon image" />
      <div className='text-golden font-base text-3xl sm:text-4xl lg:text-5xl my-2 sm:my-4'>
        Photo Gallery
      </div>
      <p className='font-alt text-grey text-xs sm:text-sm text-center lg:text-start font-normal leading-5 sm:leading-6 max-w-[20rem] sm:max-w-[25rem] my-2 sm:my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <a className='bg-golden text-black font-base px-3 sm:px-6 py-1 sm:py-2 text-md sm:font-bold mt-2' href="#View">View More</a>
    </div>

    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 w-full">
      <GalleryImg imagePath={images.gallery04} />
      <GalleryImg imagePath={images.gallery03} className="hidden sm:block" />
      <GalleryImg imagePath={images.gallery02} className="hidden sm:block" />
      <GalleryImg imagePath={images.gallery01} className="hidden sm:block" />
    </div>
  </div>
);

function GalleryImg({ imagePath, className }) {
  return (
    <div className={"h-[17rem] w-44 bg-cover " + className} style={{ backgroundImage: `url(${imagePath})` }} >
      <div className="w-full h-full border-2 border-white border-opacity-20 hover:border-slate-700 hover:border-opacity-45">
        <div className="hover:bg-black hover:cursor-pointer w-full h-full hover:bg-opacity-70 flex justify-center items-center group">
          <FiInstagram className='w-10 hidden group-hover:block cursor-pointer' size="2rem" color='white' />
        </div>
      </div>
    </div>
  )
}

GalleryImg.propTypes = {
  imagePath: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Gallery;
