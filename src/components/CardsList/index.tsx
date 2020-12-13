import Heading from 'components/Heading';
import { PaymentCardProps } from 'components/PaymentOptions';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type CardsListProps = {
  cards?: PaymentCardProps[];
  contentStyle?: ColorStyleProps;
};

const CardsList = ({ cards, contentStyle = 'primary' }: CardsListProps) => (
  <s.Wrapper>
    <Heading lineBottom color="secondary" size="small" lineColor={contentStyle}>
      my cards
    </Heading>

    {!!cards &&
      cards.map(card => (
        <s.Card key={card.flag}>
          <img src={card.image} alt={card.flag} />
          <span>{card.number}</span>
        </s.Card>
      ))}
  </s.Wrapper>
);

export default CardsList;
