import { Story, Meta } from '@storybook/react/types-6-0';
import Logo, { LogoProps } from '.';

export default {
  title: 'Design System/Logo',
  component: Logo
} as Meta;

export const Default: Story<LogoProps> = args => <Logo {...args} />;

Default.args = {
  color: 'secondary'
};

export const LogoWithoutText: Story<LogoProps> = args => <Logo {...args} />;

LogoWithoutText.args = {
  color: 'secondary',
  hideTextOnMobile: true
};

LogoWithoutText.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
  // layout: 'fullscreen'
};
