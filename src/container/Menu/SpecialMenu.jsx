import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div id='Menu' className='px-4 sm:px-16 py-12 sm:py-24 bg-black flex flex-col items-center justify-between'>
    <SubHeading className='flex flex-col justify-center items-center mb-10' majorHead="Today's Special" minorHead="Menu that fits you palatte" />

    <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
      <div className='flex flex-col justify-evenly items-center'>
        <div className='flex justify-center items-start h-14'>
          <p className='text-white font-base font-bold text-4xl'>Wine & Beer</p>
        </div>
        <div className='flex flex-col justify-center items-center text-white'>
          {data.wines.map((wine, index) => (
            <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <img src={images.menu} alt="Menu Glass" className='h-96' />

      <div className='flex flex-col justify-evenly items-center'>
        <div className='flex justify-center items-start h-14'>
          <p className='text-white font-base font-bold text-4xl'>Cocktails</p>
        </div>
        <div className='flex flex-col justify-center items-center text-white'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className='flex justify-center items-end h-16'>
      <a className='bg-golden text-black font-base px-3 sm:px-6 py-1 sm:py-2 text-md sm:font-bold mt-2' href="#more">View More</a>
    </div>
  </div>
);

export default SpecialMenu;
