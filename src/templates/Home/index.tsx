import { Container } from 'components/Container';
import BannerSlider from 'components/BannerSlider';
import Footer from 'components/Footer';
import { HighlightProps } from 'components/Highlight';
import Menu from 'components/Menu';
import Showcase from 'components/Showcase';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';

import * as s from './styles';

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
  <s.Wrapper>
    <Container>
      <Menu />
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

    <s.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </s.SectionFooter>
  </s.Wrapper>
);

export default Home;
