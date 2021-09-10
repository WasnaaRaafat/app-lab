import FeaturesImg from '../Resources/Features/Features-phone.png';
import FastFeature from '../Resources/Features/speed.png';
import VectorFeature from '../Resources/Features/vector.png';
import PrototypeFeature from '../Resources/Features/prototyping.png';
import CompaniesImg from '../Resources/companies/companies.png';

const Features = () => {
  return (
    <div id='KeyFeatures'>
      <div className='Companies'>
        <p className='companies-title'>Trusted by companies like</p>
        <div>
          <img
            src={CompaniesImg}
            alt='Companies logos'
            className='companies-logos'
          />
        </div>
      </div>
      <div className='Features'>
        <img src={FeaturesImg} alt='Features' className='Features-image' />
        <div className='awesome-app'>
          <div className='feature-title'>
            <h1>Awesome apps features</h1>
            <p className='feature-description'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
          </div>
          <div className='awesome-app-features'>
            <div className='card-feature'>
              <img src={FastFeature} alt='' className='card-img' />
              <div className='img-caption'>
                <h3 className='red-title'>Fast Performance</h3>
                <p className='card-text'>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </p>
              </div>
            </div>
            <div className='card-feature'>
              <img src={PrototypeFeature} alt='' className='card-img' />
              <div className='img-caption'>
                <h3 className='blue-title'>Prototyping</h3>
                <p className='card-text'>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </p>
              </div>
            </div>
            <div className=' card-feature'>
              <img src={VectorFeature} alt='' className='card-img' />
              <div className='img-caption'>
                <h3 className='green-title'>Vector Editing</h3>
                <p className='card-text'>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
