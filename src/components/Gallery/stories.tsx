import { Story, Meta } from '@storybook/react/types-6-0';

import Gallery, { GalleryProps } from '.';
import { mock as galleryItemsMock } from './mock';

export default {
  title: 'Design System/Slider/Gallery',
  component: Gallery,
  args: {
    items: galleryItemsMock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    jest: ['Gallery.test.tsx']
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

export const GalleryDefault: Story<GalleryProps> = args => (
  <Gallery {...args} />
);
