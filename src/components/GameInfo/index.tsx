import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import { ColorStyleProps } from 'types/global';

import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather';
import { Heart as HeartIcon } from '@styled-icons/feather';

import * as s from './styles';

export type GameInfoProps = {
  contentStyle?: ColorStyleProps;
  description: string;
  price: string;
  title: string;
  ribbonColorStyle?: ColorStyleProps;
};

const GameInfo = ({
  contentStyle = 'primary',
  description,
  price,
  ribbonColorStyle = 'secondary',
  title
}: GameInfoProps) => (
  <s.Wrapper>
    <Heading color="secondary" lineBottom lineColor={contentStyle}>
      {title}
    </Heading>
    <Ribbon colorStyle={ribbonColorStyle}>${price}</Ribbon>
    <s.Description>{description}</s.Description>

    <s.ButtonsWrapper>
      <Button icon={<ShoppingCartIcon />} colorStyle={contentStyle}>
        add to cart
      </Button>
      <Button icon={<HeartIcon />} minimal colorStyle={contentStyle}>
        wishlist
      </Button>
    </s.ButtonsWrapper>
  </s.Wrapper>
);

export default GameInfo;
