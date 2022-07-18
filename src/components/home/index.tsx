import CallTo from './CallTo';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Pricing from './PricingPlans';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <Features />
      <Pricing />
      <CallTo />
      <Footer />
    </>
  );
};

export default HomePage;
