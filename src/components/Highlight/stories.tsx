import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';
import { mock as highlightMock } from './mock';

export default {
  title: 'Design System/Highlight',
  component: Highlight,
  args: { ...highlightMock },
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
