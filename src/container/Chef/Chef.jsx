import images from "../../constants/images";

const Chef = () => (
  <div className='px-8 sm:px-16 py-12 sm:py-20 flex flex-col md:flex-row gap-12 md:gap-24 sm:justify-between items-center lg:min-h-screen bg-center bg-repeat bg-cover ' style={{ backgroundImage: `url(${images.bg})` }} id="#Chef">
    <div className="flex flex-1 justify-center items-center">
      <img className="w-[15rem] md:w-[28rem] h-auto" src={images.chef} alt="chef image" />
    </div>

    <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-4 lg:gap-8">
      <div className="flex flex-col justify-center items-center md:items-start w-full">
        <p className='font-base text-white text-base sm:text-lg font-bold sm:font-normal'>Chef&apos;s Word</p>
        <div>
          <img src={images.spoon} alt="spoon image" />
        </div>
        <div className='text-golden font-base font text-3xl sm:text-4xl lg:text-5xl my-2 sm:my-4'>
          What We Believe In
        </div>
      </div>

      <p className="font-alt text-grey text-center md:text-start italic text-xs lg:text-sm leading-[14px] lg:leading-5 my-2 sm:my-4"><img className="w-8 sm:w-10 -mt-7 inline" src={images.quote} alt="qoute" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

      <div className="flex flex-col">
        <h1 className="text-golden font-base text-2xl lg:text-3xl">Kevin Luo</h1>
        <p className="text-grey text-xs font-alt">Chef & Founder</p>
      </div>

      <img className="h-14 lg:h-16" src={images.sign} alt="chef sign" />
    </div>
  </div>
);

export default Chef;
