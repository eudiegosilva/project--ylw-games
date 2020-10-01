import { fireEvent, screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const gameCardProps = {
  title: 'Cyberpunk 2077',
  developer: 'CD PROJEKT RED',
  image: '/img/cyberpunk-2077-card.jpg',
  price: 'R$ 199,90'
};

describe('<GameCard />', () => {
  it('should render the game card succefully', () => {
    renderWithTheme(<GameCard {...gameCardProps} />);

    expect(
      screen.getByRole('heading', { name: /cyberpunk 2077/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /cd projekt red/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: gameCardProps.title })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/game price/i)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: gameCardProps.title })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render default price', () => {
    renderWithTheme(<GameCard {...gameCardProps} />);
    const price = screen.getByText('R$ 199,90');

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('should render a line-through price when promotional', () => {
    renderWithTheme(
      <GameCard {...gameCardProps} promotionalPrice="R$ 149,90" />
    );
    expect(screen.getByText('R$ 199,90')).toHaveStyle({
      textDecoration: 'line-through'
    });
    expect(screen.getByText('R$ 149,90')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...gameCardProps} favorite />);
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFavorite methor when favorite icon is clicked', () => {
    const onFavorite = jest.fn();
    renderWithTheme(
      <GameCard {...gameCardProps} favorite onFavorite={onFavorite} />
    );
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onFavorite).toBeCalled();
  });

  it('should render a ribbon', () => {
    renderWithTheme(
      <GameCard
        {...gameCardProps}
        ribbon="example ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/example ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#171717' });

    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
