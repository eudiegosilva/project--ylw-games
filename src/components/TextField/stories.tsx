import { Story, Meta } from '@storybook/react/types-6-0';

import TextField, { TextFieldProps } from '.';

import { Mail } from '@styled-icons/feather';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'e-mail',
    labelFor: 'email',
    id: 'email',
    initialValue: '',
    placeholder: 'diego@yellow.com',
    icon: <Mail />
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  },
  parameters: {
    jest: ['TextField.test.tsx']
  }
} as Meta;

export const TextFieldDefault: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const TextFieldWithError: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField error="...something is wrong" {...args} />
  </div>
);
