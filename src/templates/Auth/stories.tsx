import { Story, Meta } from '@storybook/react/types-6-0';

import FormSignIn from 'components/FormSignIn';

import Auth, { AuthTemplateProps } from 'templates/Auth';

export default {
  title: 'Template/Auth',
  component: Auth,
  args: {
    title: 'sign in'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    jest: ['Auth.test.tsx']
  }
} as Meta;

export const AuthOnMobile: Story<AuthTemplateProps> = args => (
  <Auth {...args}>
    <FormSignIn />
  </Auth>
);

AuthOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const AuthOnDesktop: Story<AuthTemplateProps> = args => (
  <Auth {...args}>
    <FormSignIn />
  </Auth>
);
