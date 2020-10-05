import { Story, Meta } from '@storybook/react/types-6-0';
import BannerSlider, { BannerSliderProps } from '.';
import { items } from './mock';

export default {
  title: 'Design System/BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const BannerSliderOnDesktop: Story<BannerSliderProps> = args => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto'
    }}
  >
    <BannerSlider {...args} />
  </div>
);

BannerSliderOnDesktop.argTypes = {
  items: {
    type: ''
  },
  ribbonColor: {
    type: ''
  }
};

BannerSliderOnDesktop.parameters = {
  backgrounds: {
    default: 'dark'
  }
};

export const BannerSliderOnMobile: Story<BannerSliderProps> = args => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto'
    }}
  >
    <BannerSlider {...args} />
  </div>
);

BannerSliderOnMobile.argTypes = {
  items: {
    type: ''
  },
  ribbonColor: {
    type: ''
  }
};

BannerSliderOnMobile.parameters = {
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
};
