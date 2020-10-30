import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByRole('Checkbox')).not.toBeInTheDocument();
  });

  it('should render with a dark label', () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="secondary"
      />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#171717'
    });
  });

  it('should dispatch onCheck when label status is changed', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
  });
});
