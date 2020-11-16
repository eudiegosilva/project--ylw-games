import Home, { HomeTemplateProps } from 'templates/Home';

import { mock as bannersMocks } from 'components/BannerSlider/mock';
import { mock as gamesMocks } from 'components/GameCardSlider/mock';
import { mock as highlightMocks } from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMocks,
      newGames: gamesMocks,
      mostPopularHighlight: highlightMocks,
      mostPopularGames: gamesMocks,
      upcommingHighlight: highlightMocks,
      upcommingGames: gamesMocks,
      upcommingMoreGames: gamesMocks,
      freeHighlight: highlightMocks,
      freeGames: gamesMocks
    }
  };
}
