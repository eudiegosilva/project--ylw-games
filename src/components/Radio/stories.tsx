import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { RadioProps } from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
  args: {
    colorStyle: 'primary',
    defaultChecked: false,
    id: 'first',
    label: 'first',
    labelColor: 'secondary',
    labelFor: 'first',
    name: 'value',
    value: 'first value'
  },
  parameters: {
    layout: 'fullscreen',
    jest: ['Radio.test.tsx']
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta;

export const RadioDefault: Story<RadioProps> = args => (
  <>
    <div style={{ padding: 10 }}>
      <Radio {...args} defaultChecked />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        id="second"
        label="second"
        labelColor="secondary"
        labelFor="second"
        name="value"
        value="second value"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        id="third"
        label="third"
        labelColor="secondary"
        labelFor="third"
        name="value"
        value="third value"
      />
    </div>
  </>
);
