import { Story, Meta } from '@storybook/react/types-6-0';

import FormProfile from '.';

export default {
  title: 'Design System/Form/FormProfile',
  component: FormProfile,
  parameters: {
    jest: ['FormProfile.test.tsx']
  },
  decorators: [
    Story => (
      <div style={{ margin: 'auto', maxWidth: '86rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const FormProfileDefault: Story = args => <FormProfile {...args} />;
