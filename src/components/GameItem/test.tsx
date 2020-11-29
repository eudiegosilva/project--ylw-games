import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameItem from '.';

const gameItemProps = {
  image:
    'https://www.rockstargames.com/reddeadredemption2/rockstar_games/r_d_r2_core/img/home_features/17.jpg',
  title: 'Red Dead Redemption II',
  price: 'R$ 159,00'
};

describe('<GameItem />', () => {
  it('should render the game item', () => {
    renderWithTheme(<GameItem {...gameItemProps} />);

    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption II/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Red Dead Redemption II/i })
    ).toHaveAttribute('src', gameItemProps.image);
    expect(screen.getByText('R$ 159,00')).toBeInTheDocument();
  });
});
