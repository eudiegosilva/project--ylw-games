import { Story, Meta } from '@storybook/react/types-6-0';

import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';

import Button from '.';

export default {
  title: 'Design System/Button',
  component: Button,
  args: {
    children: 'buy now',
    fullWidth: false
  },
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: 'medium'
    },
    colorStyle: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'alternative']
      },
      defaultValue: 'primary'
    },
    minimal: {
      control: 'boolean'
    }
  },
  parameters: {
    jest: ['Button.test.tsx']
  }
} as Meta;

export const ButtonDefault: Story = args => <Button {...args} />;

export const ButtonWithIcon: Story = args => <Button {...args} />;

ButtonWithIcon.args = {
  icon: <ShoppingCartIcon />
};

ButtonWithIcon.argTypes = {
  icon: {
    type: ''
  }
};

export const ButtonAsLink: Story = args => <Button {...args} />;

ButtonAsLink.args = {
  as: 'a',
  href: '/link'
};

ButtonAsLink.argTypes = {
  as: {
    control: {
      type: 'inline-radio',
      options: ['a', 'button']
    }
  }
};
