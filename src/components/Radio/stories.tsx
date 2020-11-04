import { Story, Meta } from '@storybook/react/types-6-0';
import Radio, { RadioProps } from '.';

export default {
  title: 'Design System/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen'
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
      <Radio
        label="first"
        labelFor="first"
        id="first"
        name="value"
        value="first value"
        labelColor="secondary"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="second"
        labelFor="second"
        id="second"
        name="value"
        value="second value"
        labelColor="secondary"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="third"
        labelFor="third"
        id="third"
        name="value"
        value="third value"
        labelColor="secondary"
        {...args}
      />
    </div>
  </>
);
