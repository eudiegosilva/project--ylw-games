import { Story, Meta } from '@storybook/react/types-6-0';

import GameInfo, { GameInfoProps } from '.';
import { mock as gameInfoMock } from './mock';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: {
    ...gameInfoMock
  },
  parameters: {
    backgrounds: {
      default: 'yellow'
    }
  },
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '130rem', padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default: Story<GameInfoProps> = args => <GameInfo {...args} />;
