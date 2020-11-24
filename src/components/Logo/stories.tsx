import { Story, Meta } from '@storybook/react/types-6-0';

import Logo, { LogoProps } from '.';

export default {
  title: 'Design System/Logo',
  component: Logo,
  args: {
    color: 'secondary'
  },
  parameters: {
    jest: ['Logo.test.tsx']
  }
} as Meta;

export const LogoOnMobile: Story<LogoProps> = args => <Logo {...args} />;

LogoOnMobile.args = {
  hideTextOnMobile: true
};

LogoOnMobile.argTypes = {
  size: {
    type: ''
  }
};

LogoOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const LogoOnDesktop: Story<LogoProps> = args => <Logo {...args} />;
