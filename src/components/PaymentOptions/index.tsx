import { useState } from 'react';

import { AddIcon, ShoppingCartIcon } from 'assets/icons';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Radio from 'components/Radio';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type PaymentCardProps = {
  number: string;
  flag: string;
  image: string;
};

export type PaymentOptionsProps = {
  cards: PaymentCardProps[];
  handlePayment: () => void;
  contentStyle?: ColorStyleProps;
};

const PaymentOptions = ({
  contentStyle = 'primary',
  handlePayment,
  cards
}: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <s.Wrapper>
      <s.UpperSection>
        <Heading
          color="secondary"
          lineBottom
          lineColor={contentStyle}
          size="small"
        >
          payment
        </Heading>

        <s.PaymentCardList>
          {cards &&
            cards.map(card => (
              <s.CardItem key={card.number}>
                <s.CardInfo>
                  <img src={card.image} alt={card.flag} />
                  {card.number}
                </s.CardInfo>
                <Radio
                  name="payment-card"
                  id={card.number}
                  value={card.number}
                  colorStyle={contentStyle}
                  onCheck={() => setChecked(true)}
                />
              </s.CardItem>
            ))}
          <s.AddPaymentCard role="button">
            <AddIcon /> add a new payment card
          </s.AddPaymentCard>
        </s.PaymentCardList>
      </s.UpperSection>

      <s.LowerSection>
        <Button as="a" fullWidth minimal colorStyle={contentStyle}>
          continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCartIcon />}
          onClick={handlePayment}
          disabled={!checked}
          colorStyle={contentStyle}
        >
          buy now
        </Button>
      </s.LowerSection>
    </s.Wrapper>
  );
};

export default PaymentOptions;
