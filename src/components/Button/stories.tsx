import { Story, Meta } from '@storybook/react/types-6-0';
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
import Button from '.';

export default {
  title: 'Button',
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
  children: 'Button'
};

export const ButtonWithIcon: Story = args => <Button {...args} />;

ButtonWithIcon.args = {
  children: 'Button',
  icon: <ShoppingCart />,
  size: 'medium'
};
