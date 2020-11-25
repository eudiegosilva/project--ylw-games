import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Wishlist from '.';

const recommendedHighlightMock = {
  title: 'Cyberpunk 2077',
  subtitle: 'For those obsessed with power, glamor and body modification',
  buttonLabel: 'buy now',
  buttonLink: '/game/cyberpunk-2077',
  backgroundImage: '/img/cyberpunk-2077-img.png',
  floatImage: '/img/cyberpunk-2077-float.png'
};

const recommendedGamesMock = [
  {
    title: 'Red Dead Redemption II',
    developer: 'Rockstar Games',
    image:
      'https://www.rockstargames.com/reddeadredemption2/rockstar_games/r_d_r2_core/img/home_features/16.jpg',
    price: 'R$ 159,00',
    promotionalPrice: 'R$ 129,00'
  },
  {
    title: 'Detroit Become Human',
    developer: 'Quantic Dream',
    image:
      'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fdetroit-become-human%2Fhome%2FDETROIT_BECOME_HUMAN_PC_SCREENSHOT_7-1920x1080-fad5546bf18b8ea5b408a3415605dfa29d4ec7d3.jpg',
    price: 'R$ 189,00',
    promotionalPrice: 'R$ 149,00'
  }
];

const wishListProps = {
  games: recommendedGamesMock,
  recommendedGames: recommendedGamesMock,
  recommendedHighlight: recommendedHighlightMock
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function mock() {
    return <div data-testid="mock showcase" />;
  }
}));

describe('<Wishlist />', () => {
  it('should render wishlist correctly', () => {
    renderWithTheme(<Wishlist {...wishListProps} />);

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock showcase')).toBeInTheDocument();
    expect(screen.getAllByAltText(/red dead redemption II/i)).toHaveLength(1);
  });

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={recommendedGamesMock}
        recommendedHighlight={recommendedHighlightMock}
      />
    );

    expect(screen.queryByText(/cyber game/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty!/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText('games added to your wishlist will apperar here')
    ).toBeInTheDocument();
  });
});
