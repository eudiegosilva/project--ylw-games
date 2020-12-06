import { Story, Meta } from '@storybook/react/types-6-0';

import PaymentOptions, { PaymentOptionsProps } from '.';
import { mock as paymentCardsMock } from './mock';

export default {
  title: 'Design System/PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: paymentCardsMock
  },
  paymentCards: {
    type: ''
  },
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    jest: ['PaymentOptions.test.tsx']
  },
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '40rem', padding: '1.6rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const PaymentOptionsDefault: Story<PaymentOptionsProps> = args => (
  <PaymentOptions {...args} />
);
