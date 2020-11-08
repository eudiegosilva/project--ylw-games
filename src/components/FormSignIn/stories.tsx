import { Story, Meta } from '@storybook/react/types-6-0';
import FormSignIn from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta;

export const FormDefault: Story = () => (
  <div
    style={{
      width: '30rem',
      margin: 'auto'
    }}
  >
    <FormSignIn />
  </div>
);
