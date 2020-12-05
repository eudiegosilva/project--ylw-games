import Base from 'templates/Base';
import CartList, { CartListProps } from 'components/CartList';
import Heading from 'components/Heading';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';
import Showcase from 'components/Showcase';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import * as s from './styles';
import Empty from 'components/Empty';

export type CartTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'paymentCards'>;

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  paymentCards
}: CartTemplateProps) => {
  const handlePayment = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="alternative">
          my cart
        </Heading>

        {items.length ? (
          <s.Content>
            <CartList items={items} total={total} />

            <PaymentOptions
              paymentCards={paymentCards}
              handlePayment={handlePayment}
            />
          </s.Content>
        ) : (
          <Empty
            title="your cart is empty!"
            description="go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>
      <Showcase
        title="you may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;
