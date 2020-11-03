import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen'
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
      <Checkbox
        {...args}
        name="checkbox"
        label="checked"
        labelFor="checkboxchecked"
        checkedByDefault
      />
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
