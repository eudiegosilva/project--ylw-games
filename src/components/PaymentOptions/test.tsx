import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import PaymentOptions from '.';
import { mock as paymentCardsMock } from './mock';

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <PaymentOptions paymentCards={paymentCardsMock} handlePayment={jest.fn} />
    );

    expect(screen.getByText(/4325/)).toBeInTheDocument();
    expect(screen.getByText(/4326/)).toBeInTheDocument();
    expect(screen.getByText(/add a new payment card/i)).toBeInTheDocument();
  });

  it('should handle select card when clicking on de label', async () => {
    renderWithTheme(
      <PaymentOptions paymentCards={paymentCardsMock} handlePayment={jest.fn} />
    );

    userEvent.click(screen.getByText(/4325/));
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked();
    });
  });

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn();
    renderWithTheme(
      <PaymentOptions paymentCards={paymentCardsMock} handlePayment={jest.fn} />
    );

    userEvent.click(screen.getByRole('button', { name: /buy now/i }));
    expect(handlePayment).not.toHaveBeenCalled();
  });

  it('should call handlePayment when payment card is selected', async () => {
    const handlePayment = jest.fn();
    renderWithTheme(
      <PaymentOptions
        paymentCards={paymentCardsMock}
        handlePayment={handlePayment}
      />
    );

    userEvent.click(screen.getByLabelText(/4325/));
    userEvent.click(screen.getByRole('button', { name: /buy now/i }));

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled();
    });
  });
});
