import { Story, Meta } from '@storybook/react/types-6-0';

import Base, { BaseTemplateProps } from 'templates/Base';

export default {
  title: 'Template/Base',
  component: Base,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const BaseOnMobile: Story<BaseTemplateProps> = args => (
  <Base {...args} />
);

BaseOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const BaseOnDesktop: Story<BaseTemplateProps> = args => (
  <Base {...args} />
);
