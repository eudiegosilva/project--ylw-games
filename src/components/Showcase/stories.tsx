import { Story, Meta } from '@storybook/react/types-6-0';

import Showcase, { ShowcaseProps } from '.';
import { mock as highlightMock } from 'components/Highlight/mock';
import { mock as gameCardSliderMock } from 'components/GameCardSlider/mock';

export default {
  title: 'Design System/Showcase',
  component: Showcase,
  decorators: [
    Story => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const ShowcaseDefault: Story<ShowcaseProps> = args => (
  <Showcase {...args} />
);

ShowcaseDefault.args = {
  title: 'Showcase',
  highlight: highlightMock,
  games: gameCardSliderMock
};

export const ShowcaseWithoutHighlight: Story<ShowcaseProps> = args => (
  <Showcase {...args} />
);

ShowcaseWithoutHighlight.args = {
  title: 'Showcase',
  games: gameCardSliderMock
};

export const ShowcaseWithoutGameCardSlider: Story<ShowcaseProps> = args => (
  <Showcase {...args} />
);

ShowcaseWithoutGameCardSlider.args = {
  title: 'Showcase',
  highlight: highlightMock
};
