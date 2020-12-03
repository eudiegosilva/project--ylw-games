import { useState } from 'react';

import { Add as AddIcon } from '@styled-icons/material-outlined';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';

import Button from 'components/Button';

import Heading from 'components/Heading';
import Radio from 'components/Radio';

import * as s from './styles';

export type PaymentCard = {
  number: string;
  flag: string;
  image: string;
};

export type PaymentOptionsProps = {
  paymentCards: PaymentCard[];
  handlePayment: () => void;
};

const PaymentOptions = ({
  paymentCards,
  handlePayment
}: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <s.Wrapper>
      <s.UpperSection>
        <Heading
          color="secondary"
          lineBottom
          lineColor="alternative"
          size="small"
        >
          payment
        </Heading>

        <s.PaymentCardList>
          {paymentCards &&
            paymentCards.map(card => (
              <s.CardItem key={card.number}>
                <s.CardInfo>
                  <img src={card.image} alt={card.flag} />
                  {card.number}
                </s.CardInfo>
                <Radio
                  name="payment-card"
                  id={card.number}
                  value={card.number}
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
        <Button as="a" fullWidth minimal>
          continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCartIcon />}
          onClick={handlePayment}
          disabled={!checked}
        >
          buy now
        </Button>
      </s.LowerSection>
    </s.Wrapper>
  );
};

export default PaymentOptions;
