import { Story, Meta } from '@storybook/react/types-6-0';

import GameDetails, { GameDetailsProps } from '.';
import gameDetailsArgs from './mock';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
        <Story />
      </div>
    )
  ],
  args: gameDetailsArgs,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['action', 'adventure', 'role-playing', 'terror']
      }
    }
  }
} as Meta;

export const Default: Story<GameDetailsProps> = args => (
  <GameDetails {...args} />
);
