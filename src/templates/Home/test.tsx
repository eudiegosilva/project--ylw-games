import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { items as bannersMocks } from 'components/BannerSlider/mock';
import { items as gamesMocks } from 'components/GameCardSlider/mock';
import { item as highlightMocks } from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: bannersMocks,
  newGames: [gamesMocks[0]],
  mostPopularHighlight: highlightMocks,
  mostPopularGames: [gamesMocks[0]],
  upcommingHighlight: highlightMocks,
  upcommingGames: [gamesMocks[0]],
  upcommingMoreGames: [gamesMocks[0]],
  freeHighlight: highlightMocks,
  freeGames: [gamesMocks[0]]
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument();
  });

  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    // footer
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument();

    // section news
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();

    // section most popular
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument();

    // section most upcomming
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument();

    // section most free games
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument();

    // card game (five sections with one card eatch)
    expect(screen.getAllByText(/cyber game/i)).toHaveLength(5);
  });
});
