import { Story, Meta } from '@storybook/react/types-6-0';

import Empty, { EmptyProps } from '.';

export default {
  title: 'Design System/Empty',
  component: Empty,
  args: {
    title: 'your wishlist is empty!',
    description: 'games added to your wishlist will apperar here',
    hasLink: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    jest: ['Empty.test.tsx']
  }
} as Meta;

export const EmptyDefault: Story<EmptyProps> = args => <Empty {...args} />;
