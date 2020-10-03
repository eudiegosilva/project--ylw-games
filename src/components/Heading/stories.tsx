import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Design System/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const HeadingDefault: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingDefault.args = {
  children: 'Heading',
  color: 'secondary',
  lineLeft: false,
  lineBottom: false,
  lineColor: 'primary',
  size: 'medium'
};

export const HeadingWithLeftLine: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingWithLeftLine.args = {
  children: 'Heading',
  color: 'secondary',
  lineLeft: true,
  lineBottom: false,
  lineColor: 'primary'
};

export const HeadingWithBottomLine: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingWithBottomLine.args = {
  children: 'Heading',
  color: 'secondary',
  lineLeft: false,
  lineBottom: true,
  lineColor: 'primary'
};
