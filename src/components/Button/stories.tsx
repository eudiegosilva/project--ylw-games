import { Story, Meta } from '@storybook/react/types-6-0';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';
import Button from '.';

export default {
  title: 'Design Stystem/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta;

export const Default: Story = args => <Button {...args} />;

Default.args = {
  children: 'Button',
  size: 'medium',
  fullWidth: false
};

export const ButtonWithIcon: Story = args => <Button {...args} />;

ButtonWithIcon.args = {
  children: 'Button',
  icon: <ShoppingCartIcon />,
  size: 'medium'
};

export const ButtonAsLink: Story = args => <Button {...args} />;

ButtonAsLink.args = {
  children: 'Button',
  as: 'a',
  href: '/link'
};
