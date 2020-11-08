import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Menu from 'components/Menu';
import { Container } from 'components/Container';
import BannerSlider from 'components/BannerSlider';
import GameCardSlider from 'components/GameCardSlider';
import Highlight, { HighlightProps } from 'components/Highlight';

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
      <Container>
        <Heading lineLeft lineColor="primary" color="secondary">
          News
        </Heading>
        <GameCardSlider items={newGames} />
      </Container>
    </s.SectionNews>

    <s.SectionMostPopular>
      <Container>
        <Heading lineLeft lineColor="primary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </Container>
    </s.SectionMostPopular>

    <s.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColor="primary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} color="white" />
        <Highlight {...upcommingHighlight} alignment="left" />
        <GameCardSlider items={upcommingMoreGames} color="white" />
      </Container>
    </s.SectionUpcoming>

    <s.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="primary">
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} color="white" />
      </Container>
    </s.SectionFreeGames>

    <s.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </s.SectionFooter>
  </s.Wrapper>
);

export default Home;
