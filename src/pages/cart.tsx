import Cart, { CartTemplateProps } from 'templates/Cart';

import { mock as highlightMock } from 'components/Highlight/mock';
import { mock as itemsMock } from 'components/CartList/mock';
import { mock as paymentCardsMock } from 'components/PaymentOptions/mock';
import { mock as recommendedGamesMock } from 'components/GameCardSlider/mock';

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      paymentCards: paymentCardsMock,
      recommendedGames: recommendedGamesMock,
      recommendedHighlight: highlightMock,
      total: 'R$ 493,00'
    }
  };
}
