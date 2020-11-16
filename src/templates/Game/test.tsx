import { screen } from '@testing-library/react';

import galleryMock from 'components/Gallery/mock';
import { gameInfoMock } from 'components/GameInfo/mock';
import gameDetailsMock from 'components/GameDetails/mock';
import { items as gamesMock } from 'components/GameCardSlider/mock';
import { item as highlightMock } from 'components/Highlight/mock';

import Game, { GameTemplateProps } from '.';
import { GameDetailsProps } from 'components/GameDetails';
import { renderWithTheme } from 'utils/tests/helpers';

const gameTemplateProps: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock
};

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock menu" />;
  }
}));

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock gallery" />;
  }
}));

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock gameDetails" />;
  }
}));

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock gameInfo" />;
  }
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock showcase" />;
  }
}));

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...gameTemplateProps} />);
    expect(screen.getByTestId('mock gallery')).toBeInTheDocument();
    expect(screen.getByTestId('mock gameDetails')).toBeInTheDocument();
    expect(screen.getByTestId('mock gameInfo')).toBeInTheDocument();
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(2);
    expect(screen.getByText(/custom html/i)).toBeInTheDocument();
  });

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...gameTemplateProps} gallery={undefined} />);

    expect(screen.queryByTestId('mock gallery')).not.toBeInTheDocument();
  });

  it('should render the cover image', () => {
    renderWithTheme(<Game {...gameTemplateProps} />);

    const cover = screen.getByRole('image', { name: /cover/i });

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    });

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    });

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    );
  });
});
