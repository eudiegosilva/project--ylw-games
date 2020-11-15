import { Story, Meta } from '@storybook/react/types-6-0';

import TextContent, { TextContentProps } from '.';
import textArgs from './mock';

export default {
  title: 'Design System/TextContent',
  component: TextContent,
  args: textArgs,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<TextContentProps> = args => (
  <TextContent {...args} />
);
