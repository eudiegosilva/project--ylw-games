import { Story, Meta } from '@storybook/react/types-6-0';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';
import Button from '.';

export default {
  title: 'Design System/Button',
  component: Button,
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

ButtonDefault.args = {
  children: 'buy now',
  size: 'medium',
  fullWidth: false
};

export const ButtonWithIcon: Story = args => <Button {...args} />;

ButtonWithIcon.args = {
  children: 'buy now',
  icon: <ShoppingCartIcon />,
  size: 'medium'
};

export const ButtonAsLink: Story = args => <Button {...args} />;

ButtonAsLink.args = {
  children: 'buy now',
  as: 'a',
  href: '/link'
};
