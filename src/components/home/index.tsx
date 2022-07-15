import CallTo from './CallTo';
import Footer from './Footer';
import Header from './Header';
import Pricing from './PricingPlans';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <Pricing />
      <CallTo />
      <Footer />
    </>
  );
};

export default HomePage;
