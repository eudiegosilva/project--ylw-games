import Gallery, { GalleryImageProps } from 'components/Gallery';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import TextContent from 'components/TextContent';
import { Divider } from 'components/Divider';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import Base from 'templates/Base';
import Showcase from 'components/Showcase';

import * as s from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <s.Cover role="image" src={cover} aria-label="cover" />
    <s.Wrapper>
      <s.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </s.SectionGameInfo>

      <s.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </s.SectionGallery>

      <s.SectionDescription>
        <TextContent title="description" content={description} />
      </s.SectionDescription>

      <s.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </s.SectionGameDetails>

      <Showcase
        title="upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="recommended" games={recommendedGames} />
    </s.Wrapper>
  </Base>
);

export default Game;
