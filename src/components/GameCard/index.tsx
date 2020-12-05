import Button from 'components/Button';
import Ribbon, { RibbonSizes } from 'components/Ribbon';

import { ColorStyleProps } from 'types/global';

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
  ribbonColor?: ColorStyleProps;
  contentStyle?: ColorStyleProps;
};

const GameCard = ({
  contentStyle = 'primary',
  developer,
  favorite = false,
  image,
  onFavorite,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  title
}: GameCardProps) => (
  <s.Wrapper>
    {!!ribbon && (
      <Ribbon colorStyle={ribbonColor} size={ribbonSize}>
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
        <Button
          icon={<ShoppingCartIcon />}
          size="small"
          colorStyle={contentStyle}
        />
      </s.PriceWrapper>
    </s.ContentWrapper>
  </s.Wrapper>
);

export default GameCard;
