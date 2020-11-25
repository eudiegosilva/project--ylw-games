import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '.';

export default {
  title: 'Design System/Banner',
  component: Banner,
  args: {
    image:
      'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1680x655.jpg',
    title: 'Cyberpunk 2077',
    subtitle: '<p>For those obsessed with <strong>body modification</strong>',
    buttonLabel: 'buy now',
    buttonLink: '/game/cyberpunk-2077'
  },
  parameters: {
    jest: ['Banner.test.tsx']
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
  ribbon: 'preorder',
  ribbonSize: 'medium',
  ribbonColor: 'primary'
};
