import { Story, Meta } from '@storybook/react/types-6-0';

import GameInfo, { GameInfoProps } from '.';
import { gameInfoMock as gameInfoArgs } from './mock';

export default {
  title: 'Design System/GameInfo',
  component: GameInfo,
  args: {
    ...gameInfoArgs
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
