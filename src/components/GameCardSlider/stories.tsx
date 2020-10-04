import { Story, Meta } from '@storybook/react/types-6-0';

import { GameCardProps } from 'components/GameCard';
import GameCardSlider from '.';

const items = [
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
];

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
    <GameCardSlider items={args} {...args} color="white" />
  </div>
);
