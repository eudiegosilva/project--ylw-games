import Empty from 'components/Empty';
import GameItem, { GameItemProps } from 'components/GameItem';
import Heading from 'components/Heading';

import * as s from './styles';

export type OrdersListProps = {
  items?: GameItemProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <s.Wrapper>
    <Heading lineBottom color="secondary" size="small">
      my orders
    </Heading>

    {items.length ? (
      !!items &&
      items.map(item => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="you have no order yet"
        description="go back to the store and explore great games and offers"
        contentStyle="secondary"
        hasLink
      />
    )}
  </s.Wrapper>
);

export default OrdersList;
