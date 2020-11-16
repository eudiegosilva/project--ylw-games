import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { mock as bannersMocks } from 'components/BannerSlider/mock';
import { mock as gamesMocks } from 'components/GameCardSlider/mock';
import { mock as highlightMocks } from 'components/Highlight/mock';

import Home from '.';

const homeProps = {
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

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="mock showcase"></div>;
    }
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="mock banner slider"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...homeProps} />);

    expect(screen.getByTestId('mock banner slider')).toBeInTheDocument();
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(5);
  });
});
