import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Base/Form/Checkbox',
  component: Checkbox,
  args: {
    name: 'checkbox',
    label: 'checked',
    labelFor: 'checkboxchecked',
    labelColor: 'secondary'
  },
  parameters: {
    layout: 'fullscreen',
    jest: ['Checkbox.test.tsx']
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta;

export const CheckboxDefault: Story<CheckboxProps> = args => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} checkedByDefault />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name="checkboxunchecked"
        label="unchecked"
        labelFor="checkboxunchecked"
      />
    </div>
  </>
);
