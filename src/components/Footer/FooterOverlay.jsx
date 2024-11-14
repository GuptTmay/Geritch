import images from "../../constants/images";

const FooterOverlay = () => (
  <div className="flex flex-col justify-center items-center absolute w-full h-full z-0">
    <div className="w-full h-1/4 bg-black bg-center"/>
    <div className='bg-cover bg-center bg-repeat w-full h-full' style={{ backgroundImage: `url(${images.bg})` }}/>
  </div>
);

export default FooterOverlay;
