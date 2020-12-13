import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { mock as paymentCardsMock } from 'components/PaymentOptions/mock';
import CardsList from '.';

describe('<CardsList />', () => {
  it('should render the CardsList correctly', () => {
    renderWithTheme(<CardsList cards={paymentCardsMock} />);

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/flags/visa.svg'
    );
    expect(screen.getByText(/4325/)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/flags/master-card.svg'
    );
    expect(screen.getByText(/4326/)).toBeInTheDocument();
  });
});
