import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from '.';

export default {
  title: 'Design System/Menu',
  component: Menu
} as Meta;

export const MenuDefault: Story<MenuProps> = args => <Menu {...args} />;

MenuDefault.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    default: 'dark'
  },
  layout: 'fullscreen'
};
