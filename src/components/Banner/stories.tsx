import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '.';

export default {
  title: 'Design System/Banner',
  component: Banner,
  args: {
    image: 'https://source.unsplash.com/user/ryz0n/2048x1024',
    title: 'Banner title',
    subtitle: '<p>Just a example <strong>description</strong> banner</p>',
    buttonLabel: 'buy now',
    buttonLink: '/Banner/link'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const BannerDefault: Story<BannerProps> = args => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
);

BannerDefault.argTypes = {
  ribbon: {
    type: ''
  },
  ribbonSize: {
    type: ''
  },
  ribbonColor: {
    type: ''
  }
};

export const BannerWithRibbon: Story<BannerProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

BannerWithRibbon.args = {
  ribbon: 'soon',
  ribbonSize: 'medium',
  ribbonColor: 'primary'
};
