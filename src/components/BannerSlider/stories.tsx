import { Story, Meta } from '@storybook/react/types-6-0';
import BannerSlider, { BannerSliderProps } from '.';

const items = [
  {
    image: 'https://source.unsplash.com/user/ryz0n/2048x1024',
    title: 'Title example I',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'get more',
    buttonLink: '/games/te1',
    ribbon: 'soon'
  },
  {
    image: 'https://source.unsplash.com/user/ryz0n/2048x1024',
    title: 'Title example II',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'get more',
    buttonLink: '/games/te2',
    ribbon: 'soon'
  },
  {
    image: 'https://source.unsplash.com/user/ryz0n/2048x1024',
    title: 'Title example III',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'get more',
    buttonLink: '/games/te3',
    ribbon: 'soon'
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

export const Default: Story<BannerSliderProps> = args => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto'
    }}
  >
    <BannerSlider {...args} />
  </div>
);
