import AppDownload from '../Resources/Download/app-download.png';
import Phone from '../Resources/Download/holding-phone.png';
const Download = () => {
  return (
    <div>
      <div className='download'>
        <div className='download-text'>
          <h1 className='download-title title'>Download our App now !</h1>
          <p className='card-text'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
          <img src={AppDownload} alt='' />
        </div>
        <img src={Phone} alt='' className='download-phone' />
      </div>
    </div>
  );
};

export default Download;
