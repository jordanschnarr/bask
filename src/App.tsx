import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Navigation from './Navigation';
import Footer from './Footer';
import Page from './Page';
import Home from './Home';
import Privacy from './Privacy';
import TermsOfUse from './TermsOfUse';
import { Helmet } from 'react-helmet-async';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BASK Property Management',
  description: 'Commercial retail property management.',
  areaServed: 'New Jersey',
  url: 'https://baskmgt.com/',
};

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <ScrollToTop />
      <Page>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
        </Routes>
      </Page>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
