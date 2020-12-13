import { Story, Meta } from '@storybook/react/types-6-0';

import { mock as paymentCardsMock } from 'components/PaymentOptions/mock';
import CardsList, { CardsListProps } from '.';

export default {
  title: 'Design System/Profile/CardsList',
  component: CardsList,
  args: {
    cards: paymentCardsMock
  },
  parameters: {
    jest: ['CardsList.test.tsx']
  },
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '85rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const CardsListDefault: Story<CardsListProps> = args => (
  <CardsList {...args} />
);
