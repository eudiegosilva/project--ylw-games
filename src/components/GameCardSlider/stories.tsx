import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCardProps } from 'components/GameCard';
import GameCardSlider from '.';

import { items } from './mock';

export default {
  title: 'Design System/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const GameCardSliderDefault: Story<GameCardProps[]> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
);
