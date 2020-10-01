import { Story, Meta } from '@storybook/react/types-6-0';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Design System/Highlight',
  component: Highlight,
  args: {
    title: 'Cyberpunk 2077',
    subtitle: 'For those obsessed with power, glamor and body modification',
    buttonLabel: 'buy now',
    buttonLink: '/cyberpunk2077',
    backgroundImage: '/img/cyberpunk-2077-img.png'
  }
} as Meta;

export const Default: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

export const HighlightWithFloatImage: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

HighlightWithFloatImage.args = {
  floatImage: '/img/cyberpunk-2077-float.png'
};
