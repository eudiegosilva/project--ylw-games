import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { items as bannersMocks } from 'components/BannerSlider/mock';
import { items as gamesMocks } from 'components/GameCardSlider/mock';
import { item as highlightMocks } from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: bannersMocks,
  newGames: gamesMocks,
  mostPopularHighlight: highlightMocks,
  mostPopularGames: gamesMocks,
  upcommingHighlight: highlightMocks,
  upcommingGames: gamesMocks,
  upcommingMoreGames: gamesMocks,
  freeHighlight: highlightMocks,
  freeGames: gamesMocks
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

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument();
  });

  it('should render correctly heading sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument();
  });
});
