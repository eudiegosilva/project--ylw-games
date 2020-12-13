import { Story, Meta } from '@storybook/react/types-6-0';

import ProfileTemplate, { ProfileTemplateProps } from '.';

export default {
  title: 'Template/Profile',
  component: ProfileTemplate,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusamus nisi enim aspernatur error nemo velit magnam repellat esse culpa.'
  },
  parameters: {
    jest: ['Profile.test.tsx'],
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const ProfileOnMobile: Story<ProfileTemplateProps> = args => (
  <ProfileTemplate {...args} />
);

ProfileOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const ProfileOnDesktop: Story<ProfileTemplateProps> = args => (
  <ProfileTemplate {...args} />
);
