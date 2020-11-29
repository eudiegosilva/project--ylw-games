import * as s from './styles';

export type GameItemProps = {
  image: string;
  title: string;
  price: string;
};

const GameItem = ({ image, title, price }: GameItemProps) => (
  <s.Wrapper>
    <s.ContentWrapper>
      <s.ImageWrapper>
        <img src={image} alt={title} />
      </s.ImageWrapper>

      <s.InfoWrapper>
        <s.GameTitle>{title}</s.GameTitle>
        <s.GamePrice>{price}</s.GamePrice>
      </s.InfoWrapper>
    </s.ContentWrapper>
  </s.Wrapper>
);

export default GameItem;
