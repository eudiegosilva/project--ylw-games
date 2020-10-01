import { Story, Meta } from '@storybook/react/types-6-0';
import GameCard, { GameCardProps } from '.';

export default {
  title: 'Design System/GameCard',
  component: GameCard,
  args: {
    title: 'Cyberpunk 2077',
    developer: 'CD PROJEKT RED',
    image: '/img/cyberpunk-2077-card.jpg',
    price: 'R$ 199,90'
  },
  argTypes: {
    onFavorite: {
      action: 'clicked'
    },
    ribbon: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
);

Default.argTypes = {
  ribbon: {
    type: ''
  },
  ribbonSize: {
    type: ''
  },
  ribbonColor: {
    type: ''
  }
};

export const GameCardWithPromotionalPrice: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
);

GameCardWithPromotionalPrice.args = {
  promotionalPrice: 'R$ 149,90'
};

export const GameCardWithRibbon: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
);

GameCardWithRibbon.args = {
  ribbon: 'diego',
  ribbonSize: 'small',
  ribbonColor: 'secondary'
};
