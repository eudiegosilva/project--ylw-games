import { Story, Meta } from '@storybook/react/types-6-0';

import Gallery, { GalleryProps } from '.';
import galleryItems from './mock';

export default {
  title: 'Design System/Gallery',
  component: Gallery,
  args: {
    items: galleryItems
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [
    Story => (
      <div
        style={{
          margin: '0 auto',
          maxWidth: '130rem'
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default: Story<GalleryProps> = args => <Gallery {...args} />;
