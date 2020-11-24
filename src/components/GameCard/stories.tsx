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
    image: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    jest: ['GameCard.test.tsx']
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const GameCardDefault: Story<GameCardProps> = args => (
  <GameCard {...args} />
);

GameCardDefault.argTypes = {
  ribbon: {
    control: {
      type: ''
    }
  },
  ribbonSize: {
    type: ''
  },
  ribbonColor: {
    type: ''
  }
};

export const GameCardWithPromotionalPrice: Story<GameCardProps> = args => (
  <GameCard {...args} />
);

GameCardWithPromotionalPrice.args = {
  promotionalPrice: 'R$ 149,90'
};

GameCardWithPromotionalPrice.argTypes = {
  ribbon: {
    control: {
      type: ''
    }
  },
  ribbonSize: {
    type: ''
  },
  ribbonColor: {
    type: ''
  }
};

export const GameCardWithRibbon: Story<GameCardProps> = args => (
  <GameCard {...args} />
);

GameCardWithRibbon.args = {
  ribbon: 'soon',
  ribbonSize: 'small',
  ribbonColor: 'primary'
};
