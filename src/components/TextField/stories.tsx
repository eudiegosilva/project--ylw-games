import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'Design System/TextField',
  component: TextField,
  args: {
    label: 'e-mail',
    labelFor: 'email',
    id: 'email',
    initialValue: '',
    placeholder: 'diego@yellow.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta;

export const TextFieldDefault: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
