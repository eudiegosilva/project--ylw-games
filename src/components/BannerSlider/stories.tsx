import { Story, Meta } from '@storybook/react/types-6-0';
import BannerSlider, { BannerSliderProps } from '.';

const items = [
  {
    image:
      'https://images.unsplash.com/photo-1496979149951-4fd28cf221e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1024&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=2048',
    title: 'Title example I',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'buy now',
    buttonLink: '/games/te1',
    ribbon: 'soon'
  },
  {
    image:
      'https://images.unsplash.com/photo-1496283529737-a39ef33f214d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1024&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=2048',
    title: 'Title example II',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'buy now',
    buttonLink: '/games/te2'
  },
  {
    image:
      'https://images.unsplash.com/photo-1496979424495-8ca276b5bf34?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1024&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=2048',
    title: 'Title example III',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'buy now',
    buttonLink: '/games/te3'
  }
];

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
