import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather';
import { Heart as HeartIcon } from '@styled-icons/feather';

import * as s from './styles';

export type GameInfoProps = {
  title: string;
  price: string;
  description: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <s.Wrapper>
    <Heading color="secondary" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">${price}</Ribbon>
    <s.Description>{description}</s.Description>

    <s.ButtonsWrapper>
      <Button icon={<ShoppingCartIcon />}>add to cart</Button>
      <Button icon={<HeartIcon />} minimal>
        wishlist
      </Button>
    </s.ButtonsWrapper>
  </s.Wrapper>
);

export default GameInfo;
