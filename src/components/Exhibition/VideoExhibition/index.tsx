import * as S from './Video.styled';
type Props = {};

const VideoExhibition = (props: Props) => {
  return (
    <S.VideoExhibition>
      <video controls autoPlay>
        <source
          src="https://meta.tourzy.vn/public/frontend/showroom/videos/Full.mp4"
          type="video/mp4"
        />
      </video>
    </S.VideoExhibition>
  );
};

export default VideoExhibition;
