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
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '130rem', padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const BannerDefault: Story<BannerProps> = args => <Banner {...args} />;

BannerDefault.argTypes = {
  ribbon: {
    control: {
      type: ''
    }
  },
  ribbonSize: {
    control: {
      type: ''
    }
  },
  ribbonColor: {
    control: {
      type: ''
    }
  }
};

export const BannerWithRibbon: Story<BannerProps> = args => (
  <Banner {...args} />
);

BannerWithRibbon.args = {
  ribbon: 'soon',
  ribbonSize: 'medium',
  ribbonColor: 'primary'
};
