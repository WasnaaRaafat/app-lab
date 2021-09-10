import Badge from '../Resources/Smart/badge.png';
import Bill from '../Resources/Smart/bill.png';
import Network from '../Resources/Smart/network.png';
import Designed from '../Resources/Smart/Designed.png';
const Smart = () => {
  return (
    <div>
      <div className='Smart'>
        <h1>Smart jackpots that you may love this anytime & anywhere </h1>
        <div className='line'></div>
        <p>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className='smart-cards'>
        <div className=' smart-card'>
          <img src={Bill} alt='Bill Logo' />
          <h3 className='smart-title red-title'>Automatic Payouts</h3>
          <p className='card-text'>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
        <div className=' smart-card'>
          <img src={Network} alt='Network Logo' />
          <h3 className='smart-title blue-title'>Network Effect</h3>
          <p className='card-text'>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
        <div className=' smart-card'>
          <img src={Badge} alt='Badge Logo' />
          <h3 className='smart-title green-title'>Bigger Rewards Method</h3>
          <p className='card-text'>
            Get your blood tests delivered at home collect a sample from the
            news your blood tests.
          </p>
        </div>
      </div>
      <div className='designed-and-build'>
        <img src={Designed} alt='Computer guy' />
        <div className='latest-code'>
          <h1 className='title designed-title'>
            Designed & built by the latest code integration
          </h1>
          <p className='card-text designed-text'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
          <a href='/#' className='small-btn btn smart-btn'>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Smart;
