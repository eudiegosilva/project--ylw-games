import { Story, Meta } from '@storybook/react/types-6-0';

import FormSignIn from 'components/FormSignIn';

import AuthTemplate, { AuthTemplateProps } from 'templates/Auth';

export default {
  title: 'Template/Auth',
  component: AuthTemplate,
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
  <AuthTemplate {...args}>
    <FormSignIn />
  </AuthTemplate>
);

AuthOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const AuthOnDesktop: Story<AuthTemplateProps> = args => (
  <AuthTemplate {...args}>
    <FormSignIn />
  </AuthTemplate>
);
