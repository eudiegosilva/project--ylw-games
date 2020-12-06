import { Story, Meta } from '@storybook/react/types-6-0';

import ProfileMenu, { ProfileMenuProps } from '.';

export default {
  title: 'Design System/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    jest: ['ProfileMenu.test.tsx'],
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const ProfileMenuDefault: Story<ProfileMenuProps> = args => (
  <ProfileMenu {...args} />
);
