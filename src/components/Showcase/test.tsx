import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { mock as highlightMock } from 'components/Highlight/mock';
import { mock as gameCardSliderMock } from 'components/GameCardSlider/mock';

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
