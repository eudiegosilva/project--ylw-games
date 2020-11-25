import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

const highlightMock = {
  title: 'Cyberpunk 2077',
  subtitle: 'For those obsessed with power, glamor and body modification',
  buttonLabel: 'buy now',
  buttonLink: '/game/cyberpunk-2077',
  backgroundImage: '/img/cyberpunk-2077-img.png',
  floatImage: '/img/cyberpunk-2077-float.png'
};

const gameCardSliderMock = [
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

import Showcase from '.';

const showcaseProps = {
  title: 'showcase',
  highlight: highlightMock,
  games: gameCardSliderMock.slice(0, 1)
};

describe('<Showcase />', () => {
  it('should render complete showcase', () => {
    renderWithTheme(<Showcase {...showcaseProps} />);

    expect(
      screen.getByRole('heading', { name: /showcase/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: gameCardSliderMock[0].title })
    ).toBeInTheDocument();
  });

  it('should render without title', () => {
    renderWithTheme(
      <Showcase
        games={showcaseProps.games}
        highlight={showcaseProps.highlight}
      />
    );

    screen.getByRole('heading', { name: highlightMock.title });
    screen.getByRole('heading', { name: gameCardSliderMock[0].title });

    expect(
      screen.queryByRole('heading', { name: /showcase/i })
    ).not.toBeInTheDocument();
  });

  it('should render without highlight', () => {
    renderWithTheme(
      <Showcase title={showcaseProps.title} games={showcaseProps.games} />
    );

    screen.getByRole('heading', { name: /showcase/i });
    screen.getByRole('heading', { name: gameCardSliderMock[0].title });

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument();
  });

  it('should render without games card slider', () => {
    renderWithTheme(
      <Showcase
        title={showcaseProps.title}
        highlight={showcaseProps.highlight}
      />
    );

    screen.getByRole('heading', { name: /showcase/i });
    screen.getByRole('heading', { name: highlightMock.title });

    expect(
      screen.queryByRole('heading', { name: gameCardSliderMock[0].title })
    ).not.toBeInTheDocument();
  });
});
