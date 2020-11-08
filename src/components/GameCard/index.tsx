import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';

import { Heart as HeartIcon } from '@styled-icons/feather';
import { Heart as HeartFilledIcon } from '@styled-icons/fa-solid/Heart';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';

import * as s from './styles';

export type GameCardProps = {
  title: string;
  developer: string;
  image: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFavorite?: () => void;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
  title,
  developer,
  image,
  price,
  promotionalPrice,
  favorite = false,
  onFavorite,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <s.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <s.ImageWrapper>
      <s.GameImage src={image} alt={title} />
    </s.ImageWrapper>
    <s.ContentWrapper>
      <s.InfoWrapper>
        <s.GameTitle>{title}</s.GameTitle>
        <s.GameDeveloper>{developer}</s.GameDeveloper>
      </s.InfoWrapper>
      <s.FavoriteButton role="button" onClick={onFavorite}>
        {favorite ? (
          <HeartFilledIcon aria-label="remove from wishlist" />
        ) : (
          <HeartIcon aria-label="add to wishlist" />
        )}
      </s.FavoriteButton>
      <s.PriceWrapper>
        {!!promotionalPrice && (
          <s.GamePrice isPromotional aria-label="game price">
            {price}
          </s.GamePrice>
        )}
        <s.GamePrice aria-label="game price">
          {promotionalPrice || price}
        </s.GamePrice>
        <Button icon={<ShoppingCartIcon />} size="small" />
      </s.PriceWrapper>
    </s.ContentWrapper>
  </s.Wrapper>
);

export default GameCard;
