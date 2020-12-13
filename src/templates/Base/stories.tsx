import { Story, Meta } from '@storybook/react/types-6-0';

import BaseTemplate, { BaseTemplateProps } from 'templates/Base';

export default {
  title: 'Template/Base',
  component: BaseTemplate,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    jest: ['Base.test.tsx']
  }
} as Meta;

export const BaseOnMobile: Story<BaseTemplateProps> = args => (
  <BaseTemplate {...args} />
);

BaseOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const BaseOnDesktop: Story<BaseTemplateProps> = args => (
  <BaseTemplate {...args} />
);
