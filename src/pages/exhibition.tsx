import BannerShowroom from '@/components/Exhibition/Banner';
import ContactUs from '@/components/Exhibition/Contact';
import FeaturesCard from '@/components/Exhibition/FeaturesCard';
import Title from '@/components/Exhibition/Title';
import VideoExhibition from '@/components/Exhibition/VideoExhibition';
import Header from '@/components/Header';
import 'antd/dist/antd.css';

type Props = {};

const Showroom = (props: Props) => {
  return (
    <div>
      <Header />
      <BannerShowroom />
      <Title src="/hello" title="Virtual Expo" />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <VideoExhibition />
      <ContactUs />
    </div>
  );
};

export default Showroom;
