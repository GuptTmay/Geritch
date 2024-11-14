import PropTypes from 'prop-types';

const MenuItem = ({ title, price, tags }) => (
  <div className='flex flex-col justify-center w-full my-2'>
    <div className='flex justify-between items-center mb-1' >
      <div className='text-golden text-xl font-bold font-base'>
        <p>{title}</p>
      </div>


      <div className='text-white text-xl font-base flex justify-center items-center'>
        <div className='h-[1px] w-[90px] bg-white mx-4' />
        <p>{price}</p>
      </div>
    </div>
    <div className='text-grey text-xs font-alt'>
      <p>{tags}</p>
    </div>
  </div>
);


MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}

export default MenuItem;
