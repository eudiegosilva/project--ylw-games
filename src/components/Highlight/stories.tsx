import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';
import { item } from './mock';

export default {
  title: 'Design System/Highlight',
  component: Highlight,
  args: { ...item },
  argTypes: {
    floatImage: {
      type: ''
    },
    backgroundImage: {
      type: ''
    }
  }
} as Meta;

export const HighlightDefault: Story<HighlightProps> = args => (
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
