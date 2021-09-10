import People from '../Resources/Clients/people.png';
import Client from '../Resources/Clients/client.png';
import Star from '../Resources/Clients/star.png';
import Arrows from '../Resources/Clients/Arrows.png';
const Clients = () => {
  return (
    <div>
      <div className='Clients'>
        <img src={People} alt='Pepole on a map' className='clients-map' />
        <div className='meet-clients'>
          <h1 className='big-title meet-clients-title'>
            Meet Client Satisfaction <br />
            by using product
          </h1>
          <p className='card-text meet-clients-text'>
            The rise of mobile devices transforms the way we consume. <br />{' '}
            elevant channels such as Facebook.
          </p>
          <img src={Star} alt='Rating with 5 stars' className='star-img' />
          <h4 className='user-title'> User friendly & Customizable</h4>
          <p className='card-text user-text'>
            Bring to the table win-win survival strategies to ensure proactive
            domi-
            <br />
            nation. At the end of the day, going forward, a new normal that has
            evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touchpoints for offshoring.
          </p>
          <div className='client'>
            <img src={Client} alt='Client' className='client-img' />
            <div className='client-details'>
              <h4 className='client-title'>Zoltan Nemeth</h4>
              <p className='client-text'>CEO of Pixler Lab</p>
            </div>
            <img src={Arrows} alt='' className='arrows-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
