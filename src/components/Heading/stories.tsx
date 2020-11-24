import { Story, Meta } from '@storybook/react/types-6-0';

import Heading, { HeadingProps } from '.';

export default {
  title: 'Design System/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    color: 'secondary',
    lineColor: 'primary',
    size: 'medium',
    lineLeft: false,
    lineBottom: false
  },
  argTypes: {
    children: {
      type: 'string'
    }
  },
  parameters: {
    jest: ['Heading.test.tsx']
  }
} as Meta;

export const HeadingDefault: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingDefault.args = {};

export const HeadingWithLeftLine: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingWithLeftLine.args = {
  lineLeft: true
};

export const HeadingWithBottomLine: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingWithBottomLine.args = {
  lineBottom: true
};
