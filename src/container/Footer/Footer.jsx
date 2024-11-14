import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { Newsletter, FooterOverlay } from '../../components';
import images from "../../constants/images";

const Footer = () => (
  <div id='Contact' className='px-4 relative flex flex-col justify-center items-center gap-20 md:gap-40'>
    <FooterOverlay />
    <Newsletter />

    <div className='flex flex-col justify-center items-center w-full z-10 mb-10 gap-20'>

      <div className='flex flex-col md:flex-row justify-center items-center md:justify-evenly md:items-start w-full gap-16 md:gap-0'>
        <div className='flex flex-col justify-center items-center text-grey text-xs font-alt w-[15rem]'>
          <h1 className='text-white text-2xl font-base my-2'>Contact Us</h1>
          <p className='my-2'>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
          <p className='text-5xl text-golden uppercase font-base'>gericht</p>
          <p className='text-white text-sm max-w-[22rem] mt-8 mb-3' >&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} alt="spoon" />
          <div className='flex items-center justify-center gap-4 mt-3'>
            <FiFacebook className='cursor-pointer hover:scale-125' size="1.5rem" fill='white' style={{ strokeWidth: '0.01rem' }} />
            <FiTwitter className='cursor-pointer hover:scale-125' size="1.3rem"  color='white' />
            <FiInstagram className='cursor-pointer hover:scale-125' size="1.5rem" color='white' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center text-grey text-xs font-alt w-[15rem]'>
          <h1 className='text-white text-2xl font-base my-2'>Working Hours</h1>
          <p className='mt-2'>Monday-Friday:</p>
          <p>08:00 am - 12:00 am</p>
          <p className='mt-2'>Saturday-Sunday:</p>
          <p>07:00 am - 11:00 pm</p>
        </div>
      </div>

      <p className='text-grey font-alt text-xs text-nowrap z-10'>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
