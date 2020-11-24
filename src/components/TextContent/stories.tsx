import { Story, Meta } from '@storybook/react/types-6-0';

import TextContent, { TextContentProps } from '.';
import { mock as textContentMock } from './mock';

export default {
  title: 'Design System/TextContent',
  component: TextContent,
  args: textContentMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    jest: ['TextContent.test.tsx']
  }
} as Meta;

export const Default: Story<TextContentProps> = args => (
  <TextContent {...args} />
);
