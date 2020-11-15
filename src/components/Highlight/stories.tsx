import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';
import { item } from './mock';

export default {
  title: 'Game/Highlight',
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

export const GameHighlightDefault: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);
