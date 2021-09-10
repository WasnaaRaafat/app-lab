import { Link } from 'react-scroll';
import Socials from '../Resources/Socials/socials.png';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='logo footer-logo'>
        App<span className='footer-span'>Lab</span>
      </div>
      <div className='navbar-links footer-links'>
        <Link
          to='Home'
          spy={true}
          smooth={true}
          className=' footer-link nav-link'
        >
          Home
        </Link>
        <Link
          to='KeyFeatures'
          spy={true}
          smooth={true}
          className='footer-link nav-link'
        >
          Key Features
        </Link>
        <Link
          to='Pricing'
          spy={true}
          smooth={true}
          className='footer-link nav-link'
        >
          Pricing
        </Link>
        <Link
          to='Testiminial'
          spy={true}
          smooth={true}
          className='footer-link nav-link'
        >
          Testiminial
        </Link>
        <Link
          to='FAQ'
          spy={true}
          smooth={true}
          className='footer-link nav-link'
        >
          FAQ
        </Link>
      </div>
      <img src={Socials} alt='Social Media logos' className='socials' />

      <p className='copy-rights'>
        {' '}
        Copyright© Arifur Rahman Tushar 2019. All rights reserved{' '}
      </p>
    </div>
  );
};

export default Footer;
