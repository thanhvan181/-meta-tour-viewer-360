import Banner from './Banner';
import CallTo from './CallTo';
import Features from './Features';
import Footer from './Footer';
import HeaderHome from './Header';
import LiveTour from './LiveTour';
import Pricing from './PricingPlans';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <HeaderHome />
      <Banner />
      <LiveTour />
      <Features />
      <Pricing />
      <CallTo />
      <Footer />
    </>
  );
};

export default HomePage;
