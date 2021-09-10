import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='container'>
        <div className='logo'>
          <span> App</span>Lab
        </div>
        <div className='navbar-links'>
          <Link to='Home' spy={true} smooth={true} className='nav-link'>
            Home
          </Link>
          <Link to='KeyFeatures' spy={true} smooth={true} className='nav-link'>
            Key Features
          </Link>
          <Link to='Pricing' spy={true} smooth={true} className='nav-link'>
            Pricing
          </Link>
          <Link to='Testiminial' spy={true} smooth={true} className='nav-link'>
            Testiminial
          </Link>
          <Link to='FAQ' spy={true} smooth={true} className='nav-link'>
            FAQ
          </Link>
        </div>
        <a className='btn' href='/#'>
          Try for free
        </a>
      </div>
    </div>
  );
};

export default Navbar;
