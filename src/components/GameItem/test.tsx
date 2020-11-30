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

  it('should render the item with download link', () => {
    const downloadLink = 'http://test.com';

    renderWithTheme(
      <GameItem {...gameItemProps} downloadLink={downloadLink} />
    );

    expect(
      screen.getByRole('link', { name: `get ${gameItemProps.title} here` })
    ).toHaveAttribute('href', downloadLink);
  });

  it('should render the item with payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      image: '/img/flags/master-card.png',
      number: '**** **** **** 4444',
      purchaseDate: 'purchase made on 07/20/2020 at 20:32'
    };

    renderWithTheme(<GameItem {...gameItemProps} paymentInfo={paymentInfo} />);

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      paymentInfo.image
    );
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
