import { Story, Meta } from '@storybook/react/types-6-0';

import GameItem, { GameItemProps } from '.';

import { mock as gameItemMock } from './mock';

export default {
  title: 'Design System/GameItem',
  component: GameItem,
  args: {
    ...gameItemMock
  }
} as Meta;

export const GameItemDefault: Story<GameItemProps> = args => (
  <GameItem {...args} />
);
