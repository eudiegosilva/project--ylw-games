import { Story, Meta } from '@storybook/react/types-6-0';

import GameItem, { GameItemProps } from '.';

export default {
  title: 'Design System/GameItem',
  component: GameItem,
  args: {
    image:
      'https://www.rockstargames.com/reddeadredemption2/rockstar_games/r_d_r2_core/img/home_features/17.jpg',
    title: 'Red Dead Redemption II',
    price: 'R$ 159,00'
  }
} as Meta;

export const GameItemDefault: Story<GameItemProps> = args => (
  <GameItem {...args} />
);

export const GameItemWithPayment: Story<GameItemProps> = args => (
  <GameItem {...args} />
);

GameItemWithPayment.args = {
  downloadLink: 'https://ylw-games.com/game/download/',
  paymentInfo: {
    flag: 'visa',
    image: '/img/flags/visa.svg',
    number: '**** **** **** 4444',
    purchaseDate: 'purchase made on 07/20/2020 at 20:32'
  }
};
