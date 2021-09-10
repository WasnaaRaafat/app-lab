import Computer from '../Resources/ourApp/computer.png';
import Customer from '../Resources/ourApp/customer-service.png';
import Support from '../Resources/ourApp/customer-support.png';
import Trophy from '../Resources/ourApp/trophy.png';
import Ui from '../Resources/ourApp/ui.png';
import Web from '../Resources/ourApp/web-design.png';

const OurApp = () => {
  return (
    <div id='Testiminial'>
      <div className='our-app'>
        <div className='why-ourApp'>
          <h1 className='title'> Why you should choose our app</h1>
          <p className='card-text'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </div>
        <div className='why-cards'>
          <div className='why-card'>
            <img src={Web} alt='' />
            <h4>App Development</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className='why-card'>
            <img src={Trophy} alt='' />
            <h4>10 Times Award</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className='why-card'>
            <img src={Computer} alt='' />
            <h4>Cloud Storage</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className='why-card'>
            <img src={Support} alt='' />
            <h4>Customization</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className='why-card'>
            <img src={Ui} alt='' />
            <h4>UX Planning</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
          <div className='why-card'>
            <img src={Customer} alt='' />
            <h4>Customer Support</h4>
            <p className='card-text'>
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
