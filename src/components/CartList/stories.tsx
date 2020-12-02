import { Story, Meta } from '@storybook/react/types-6-0';

import CartList, { CartListProps } from '.';

import { mock as gameItemsMock } from './mock';

export default {
  title: 'Design System/CartList',
  component: CartList,
  args: {
    items: gameItemsMock,
    total: 'R$ 493,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const CartListDefault: Story<CartListProps> = args => (
  <CartList {...args} />
);
