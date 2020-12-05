import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';

import { formatGenres, formatRating } from 'utils/formatters';
import { ColorStyleProps } from 'types/global';

import {
  Apple as AppleIcon,
  Windows as WindowsIcon,
  Linux as LinuxIcon
} from '@styled-icons/fa-brands';

import * as s from './styles';

type PlatformType = 'windows' | 'linux' | 'mac';
type RatingType = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  contentStyle?: ColorStyleProps;
  developer: string;
  genres: string[];
  platforms: PlatformType[];
  publisher: string;
  rating: RatingType;
  releaseDate: string;
};

const GameDetails = ({
  contentStyle = 'primary',
  developer,
  genres,
  platforms,
  publisher,
  rating,
  releaseDate
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <WindowsIcon title="windows" size={18} />,
    linux: <LinuxIcon title="linux" size={18} />,
    mac: <AppleIcon title="mac" size={18} />
  };

  return (
    <s.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor={contentStyle}>
          game details
        </Heading>
      </MediaMatch>

      <s.Content>
        <s.Block>
          <s.Title>developer</s.Title>
          <s.Description>{developer}</s.Description>
        </s.Block>

        <s.Block>
          <s.Title>release date</s.Title>
          <s.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </s.Description>
        </s.Block>

        <s.Block>
          <s.Title>platforms</s.Title>
          <s.IconsGroupWrapper>
            {platforms.map((icon: PlatformType) => (
              <s.IconWrapper key={icon}>{platformIcons[icon]}</s.IconWrapper>
            ))}
          </s.IconsGroupWrapper>
        </s.Block>

        <s.Block>
          <s.Title>publisher</s.Title>
          <s.Description>{publisher}</s.Description>
        </s.Block>

        <s.Block>
          <s.Title>rating</s.Title>
          <s.Description>
            {rating === 'BR0' ? 'FREE' : formatRating(rating)}
          </s.Description>
        </s.Block>

        <s.Block>
          <s.Title>genres</s.Title>
          <s.Description>{formatGenres(genres)}</s.Description>
        </s.Block>
      </s.Content>
    </s.Wrapper>
  );
};

export default GameDetails;
