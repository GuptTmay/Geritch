import PropTypes from 'prop-types';
import images from '../../constants/images.js'


function SubHeading({ className, majorHead, minorHead }) {

  return (
    <div className={className}>
      <p className='font-base text-white text-lg sm:text-2xl font-bold sm:font-normal'>{minorHead}</p>
      <div>
        <img src={images.spoon} alt="spoon image" />
      </div>
      <div className='text-golden font-base font-bold text-5xl max-w sm:max-w-none sm:text-7xl my-2 sm:my-4'>
        {majorHead}
      </div>
    </div>
  )
};

SubHeading.propTypes = {
  className: PropTypes.string.isRequired,
  majorHead: PropTypes.string.isRequired,
  minorHead: PropTypes.string.isRequired,
}

export default SubHeading;
