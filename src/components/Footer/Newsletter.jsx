import images from '../../constants/images'

const Newsletter = () => (
  <div className='flex flex-col justify-center items-center z-10 bg-[#0c0c0c] border-[1px] border-t-0 border-stone-800 w-4/5 sm:w-2/3 pt-6 px-4'>

    <div className="flex flex-col justify-center items-center">
      <p className='font-base text-white text-base sm:text-lg font-bold sm:font-normal'>Newsletter</p>
      <img src={images.spoon} alt="spoon image" />
      <div className='text-golden font-base text-center text-3xl sm:text-4xl lg:text-5xl my-2 sm:my-4'>
        Subscribe to Our Newsletter
      </div>
      <p className='font-alt text-white text-xs text-center font-extralight my-3 sm:my-4'>
        And never miss latest Updates!
      </p>
    </div>

    <div className="w-full max-w-xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Email Address"
          className="appearance-none font-base flex-1 py-2 px-3 border-grey rounded-sm border-[1px] bg-transparent border-gray-700 text-golden placeholder:text-gray-400 placeholder:text-sm"
        />
        <button
          className="appearance-none bg-golden font-base hover:bg-[#b5a876] text-black font-[600] font-sm h-10 px-6"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Newsletter;
