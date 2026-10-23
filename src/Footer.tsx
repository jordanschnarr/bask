import './Footer.css';
import { Link } from 'react-router-dom';
import Image from './Image';
import Text from './Text';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <Image src="/Images/Bask-Logo-Light.svg" alt="BASK" />
          </Link>
        </div>
        <div className="content">
          <nav className="footer-nav">
            {/*-- Column --*/}
            <div className="footer-column">
              <Text variant="generic">
                <span className="heading">Company</span>
              </Text>
              <div className="list">
                <Link to="/#About">About Us</Link>
                <Link to="/#OurServices">Our Services</Link>
                <Link to="/#Contact">Contact Us</Link>
                <Link to="/#FAQs">Frequently Aksed Questions</Link>
              </div>
            </div>
            {/*-- Column --*/}
            <div className="footer-column">
              <Text variant="generic" className="heading">
                <span className="heading">Legal</span>
              </Text>
              <div className="list">
                <Link to="/Privacy">Privacy Policy </Link>
                <Link to="/termsOfUse">Terms of Use</Link>
              </div>
            </div>
          </nav>
          <div className="legal-disclaimer">
            <Text variant="body">
              © 2026 BASK Property Management. All rights reserved.
            </Text>
            <Text variant="body">
              The information provided on this website is for general
              informational purposes only and does not constitute legal,
              financial, investment, or real estate advice. While we strive to
              keep all information accurate and up to date, BASK Property
              Management makes no representations or warranties regarding the
              completeness, accuracy, or reliability of the information
              presented. All property management services are subject to the
              terms of a separate written agreement. Use of this website does
              not create a client or management relationship.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
