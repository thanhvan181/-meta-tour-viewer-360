import * as S from './LiveTour.styled';
type Props = {};

const LiveTour = (props: Props) => {
  return (
    <S.Container>
      <S.LiveHeading>
        <S.LiveHeadingTitle>
          Trải nghiệm nền tàng thực tế ảo hàng đầu
        </S.LiveHeadingTitle>
        <S.LiveHeadingSubTitle>
          Được tin dùng bởi hàng hàng trăm đối tác, hàng nghìn khách hàng trên
          toàn thế giới
        </S.LiveHeadingSubTitle>
      </S.LiveHeading>

      <iframe
        width={'100%'}
        height={'700px'}
        src="https://meta.tourzy.vn/tour-creator/viewer/index.php?code=b73ce398c39f506af761d2277d853a92&room=531"
        frameBorder="0"
        sandbox="allow-popups allow-downloads allow-forms allow-scripts allow-same-origin"
        allow="frame-ancestors; camera; microphone;"
        allowFullScreen></iframe>
    </S.Container>
  );
};

export default LiveTour;
