import { Story, Meta } from '@storybook/react/types-6-0';

import { mock as orderItemsMock } from './mock';

import OrdersList, { OrdersListProps } from '.';

export default {
  title: 'Design System/Profile/OrdersList',
  component: OrdersList,
  args: {
    items: orderItemsMock
  },
  parameters: {
    jest: ['OrdersList.test.tsx']
  },
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '85rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const OrdersListDefault: Story<OrdersListProps> = args => (
  <OrdersList {...args} />
);
