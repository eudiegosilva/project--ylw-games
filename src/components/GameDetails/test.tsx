import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails, { GameDetailsProps } from '.';

const gameDetailProps: GameDetailsProps = {
  developer: 'game developer',
  platforms: ['windows', 'mac', 'linux'],
  publisher: 'game publisher',
  releaseDate: '2020-10-08T23:00:00',
  rating: 'BR0',
  genres: ['role-playing', 'terror']
};

describe('<GameDetails />', () => {
  it('should render the information blocks', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} />);

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /rating/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /genres/i })
    ).toBeInTheDocument();
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
  });

  it('should render formatted date', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} />);

    expect(screen.getByText('Oct 8, 2020')).toBeInTheDocument();
  });

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} />);

    expect(screen.getByText(/game developer/i)).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} />);

    expect(screen.getByText(/game publisher/i)).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...gameDetailProps} />);

    expect(screen.getByText(/role-playing \/ terror/i)).toBeInTheDocument();
  });
});
