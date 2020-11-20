import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Wishlist from '.';

import { mock as recommendedGamesMock } from 'components/GameCardSlider/mock';
import { mock as recommendedHighlightMock } from 'components/Highlight/mock';

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
    expect(screen.getAllByAltText(/cyber game/i)).toHaveLength(6);
  });
});
