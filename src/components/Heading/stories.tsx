import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<HeadingProps> = args => <Heading {...args} />;

Default.args = {
  children: 'Heading',
  color: 'secondary',
  lineLeft: false,
  lineBottom: false
};

export const HeadingWithLeftLine: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingWithLeftLine.args = {
  children: 'Heading',
  color: 'secondary',
  lineLeft: true,
  lineColor: 'primary'
};

export const HeadingWithBottomLine: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingWithBottomLine.args = {
  children: 'Heading',
  color: 'secondary',
  lineBottom: true,
  lineColor: 'primary'
};
