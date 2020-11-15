import { Story, Meta } from '@storybook/react/types-6-0';

import BannerSlider, { BannerSliderProps } from '.';

import { items } from './mock';

export default {
  title: 'Design System/BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '130rem', padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const BannerSliderOnDesktop: Story<BannerSliderProps> = args => (
  <BannerSlider {...args} />
);

BannerSliderOnDesktop.argTypes = {
  items: {
    type: ''
  }
};

export const BannerSliderOnMobile: Story<BannerSliderProps> = args => (
  <BannerSlider {...args} />
);

BannerSliderOnMobile.argTypes = {
  items: {
    control: {
      type: ''
    }
  }
};

BannerSliderOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
