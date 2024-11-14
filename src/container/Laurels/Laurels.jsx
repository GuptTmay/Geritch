import PropTypes from "prop-types";
import images from "../../constants/images";

const Laurels = () => (
  <div id='Awards' className='px-8 sm:px-16 py-12 sm:py-20 flex flex-col md:flex-row gap-12 justify-center items-center lg:min-h-screen bg-center bg-repeat bg-cover ' style={{ backgroundImage: `url(${images.bg})` }}>

    <div className="flex lg:flex-1 flex-col justify-center items-center lg:items-start gap-4 lg:gap-8">
      <div className="flex flex-col justify-center items-center lg:items-start w-full">
        <p className='font-base text-white text-base sm:text-lg font-bold sm:font-normal'>Awards & recognition</p>
        <div>
          <img src={images.spoon} alt="spoon image" />
        </div>
        <div className='text-golden font-base font text-3xl sm:text-4xl lg:text-5xl my-2 sm:my-4'>
          Our Laurels
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 ">
        <AwardInfo title='Rising Star' text="Lorem ipsum dolor sit amet, consectetur." image={images.award02} />
        <AwardInfo title='Bib Gourmond' text="Lorem ipsum dolor sit amet, consectetur." image={images.award01} />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
        <AwardInfo title='AA Hospitality' text="Lorem ipsum dolor sit amet, consectetur." image={images.award05} />
        <AwardInfo title='Outstanding Chef' text="Lorem ipsum dolor sit amet, consectetur." image={images.award03} />
      </div>
    </div>

    <div className="hidden lg:flex lg:flex-1 justify-center items-center ">
      <img className="w-[15rem] md:w-[28rem] h-auto" src={images.laurels} alt="chef image" />
    </div>
  </div>
);


function AwardInfo({ title, text, image }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <img className="w-20" src={image} alt="Award Img" />
      <div className="flex flex-col">
        <h1 className="text-golden font-base text-lg">{title}</h1>
        <p className="text-grey text-sm font-light ont-alt w-40">{text}</p>
      </div>
    </div>
  )
}



AwardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Laurels;
