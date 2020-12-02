import GameItem, { GameItemProps } from 'components/GameItem';

import * as s from './styles';

export type CartListProps = {
  items: GameItemProps[];
  total: string;
};

const CartList = ({ items, total }: CartListProps) => (
  <s.Wrapper>
    {items.map(item => (
      <GameItem key={item.title} {...item} />
    ))}

    <s.CartFooter>
      Total: <s.CartTotal>{total}</s.CartTotal>
    </s.CartFooter>
  </s.Wrapper>
);

export default CartList;
