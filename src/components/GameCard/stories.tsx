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
      action: 'favorited'
    }
  }
} as Meta;

export const Default: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithPromotionalPrice: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithPromotionalPrice.args = {
  promotionalPrice: 'R$ 149,90'
};
