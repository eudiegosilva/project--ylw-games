import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from '.';

export default {
  title: 'Design System/Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'fullscreen'
  }
} as Meta;

export const MenuOnMobile: Story<MenuProps> = args => <Menu {...args} />;

MenuOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};

export const MenuOnDesktop: Story<MenuProps> = args => <Menu {...args} />;
