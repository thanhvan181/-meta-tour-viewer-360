// import styles from "./Title.module.css"
import * as S from './Title.styled';
type Props = {
  src: string;
  title: string;
};

const Title = ({src, title}: Props) => {
  return <S.Wrapper>{title || 'Title'}</S.Wrapper>;
};

export default Title;
