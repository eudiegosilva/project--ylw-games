import { Story, Meta } from '@storybook/react/types-6-0';
import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Design Stystem/Ribbon',
  component: Ribbon,
  args: {
    children: 'ribbon'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<RibbonProps> = args => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#667788'
    }}
  >
    <Ribbon {...args} />
  </div>
);
