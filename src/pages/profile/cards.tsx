import CardsList, { CardsListProps } from 'components/CardsList';
import ProfileTemplate from 'templates/Profile';

import { mock as paymentCardsMock } from 'components/PaymentOptions/mock';

export default function CardsPage({ cards, contentStyle }: CardsListProps) {
  return (
    <ProfileTemplate>
      <CardsList cards={cards} contentStyle={contentStyle} />
    </ProfileTemplate>
  );
}

export function getServerSideProps() {
  return {
    props: {
      cards: paymentCardsMock
    }
  };
}
