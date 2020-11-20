import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';
import { mock as recommendedGamesMock } from 'components/GameCardSlider/mock';
import { mock as recommendedHighlightMock } from 'components/Highlight/mock';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      games: recommendedGamesMock,
      recommendedGames: recommendedGamesMock.slice(0, 5),
      recommendedHighlight: recommendedHighlightMock
    }
  };
}
