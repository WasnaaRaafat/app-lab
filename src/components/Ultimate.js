import Computer from '../Resources/Ultimate/computer.png';
import Customer from '../Resources/Ultimate/customer-service.png';
import Ui from '../Resources/Ultimate/ui.png';
import Web from '../Resources/Ultimate/web-design.png';
import TwoPhones from '../Resources/Ultimate/TwoPhones.png';

const Ultimate = () => {
  return (
    <div className='ultimate'>
      <div className='ultimate-features'>
        <div className='ultimate-title'>
          <h1 className='title'>Ultimate features that we built</h1>
          <p className='card-text'>
            The rise of mobile devices transforms the way we consume information
            entirely.
          </p>
        </div>

        <div className='ultimate-cards'>
          <div className='ultimate-card'>
            <img src={Web} alt='' />
            <h4>App Development</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className='ultimate-card'>
            <img src={Ui} alt='' />
            <h4>UX Planing</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>

          <div className='ultimate-card'>
            <img src={Computer} alt='' />
            <h4>Cloud Storage</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>

          <div className='ultimate-card'>
            <img src={Customer} alt='' />
            <h4>Customer support </h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
        </div>
        <a href='/#' className='btn small-btn ultimate-btn'>
          See all
        </a>
      </div>

      <img src={TwoPhones} alt='Two Phones' className='two-phones' />
    </div>
  );
};

export default Ultimate;
