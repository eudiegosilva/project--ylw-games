import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  args: {
    label: 'checkbox',
    labelFor: 'check'
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta;

export const Default: Story<CheckboxProps> = args => <Checkbox {...args} />;
