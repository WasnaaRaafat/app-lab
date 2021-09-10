import phone from '../Resources/Home/Phone-Vector.png';
import check from '../Resources/Home/check-mark.png';
const Home = () => {
  return (
    <div>
      <div className='Home' id='Home'>
        <div className='home-header'>
          <span className='award'>
            <img src={check} alt='check-mark' />
            #1 Editiors Choice App of 2020
          </span>
          <h1 className='home-title'>Best app for your modern lifestyle</h1>
          <p className='description'>
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </p>
          <div className='demo'>
            <a href='/#' className='small-btn btn'>
              Try for free
            </a>
            <a href='/#' className='demo-video'>
              Watch demo video
            </a>
          </div>
        </div>
        <div className='phone-img'>
          <img src={phone} alt='cellphone'></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
