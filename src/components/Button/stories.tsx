import { Story, Meta } from '@storybook/react/types-6-0';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';
import Button from '.';

export default {
  title: 'Design System/Button',
  component: Button,
  args: {
    children: 'buy now',
    fullWidth: false,
    size: 'medium'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    },
    as: {
      type: ''
    }
  }
} as Meta;

export const ButtonDefault: Story = args => <Button {...args} />;

export const ButtonWithIcon: Story = args => <Button {...args} />;

ButtonWithIcon.args = {
  icon: <ShoppingCartIcon />
};

export const ButtonAsLink: Story = args => <Button {...args} />;

ButtonAsLink.args = {
  as: 'a',
  href: '/link'
};
