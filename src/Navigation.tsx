import './Navigation.css';
import Image from './Image';
import { Link } from 'react-router-dom';
import Button from './Button';

function Navigation() {
  return (
    <header>
      <div className="container">
      <div className="logo">
      <Link to="/">
        <Image src="/Images/Bask-Logo-Color.svg" alt="BASK" />
      </Link>
      </div>
      <nav>
        <ul>
          <li className="hideMobile">
            <a href="/#About">About BASK</a>
          </li>
          <li className="hideMobile">
            <a href="/#OurServices">Our Services</a>
          </li>
          <li>
            <Button type="primary" href="#Contact">
              Contact Us
            </Button>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Navigation;
