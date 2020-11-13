import BannerSlider from 'components/BannerSlider';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';

import * as s from './styles';
import { Container } from 'components/Container';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingGames: GameCardProps[];
  upcommingMoreGames: GameCardProps[];
  freeHighlight: HighlightProps;
  freeGames: GameCardProps[];
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingHighlight,
  upcommingGames,
  upcommingMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <s.SectionBanner>
        <BannerSlider items={banners} />
      </s.SectionBanner>
    </Container>

    <s.SectionNews>
      <Showcase title="news" titleColor="secondary" games={newGames} />
    </s.SectionNews>

    <Showcase
      title="most popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <s.SectionUpcoming>
      <Showcase title="upcomming" games={upcommingGames} />
      <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
    </s.SectionUpcoming>

    <Showcase title="free games" highlight={freeHighlight} games={freeGames} />
  </Base>
);

export default Home;
