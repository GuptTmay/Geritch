import mealVid from '../../assets/meal.mp4'

const Intro = () => (
  <div>
    <video className='w-full' controls>
      <source src={mealVid} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  </div>
);

export default Intro;
