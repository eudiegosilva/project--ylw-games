import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { mock as orderItemsMock } from './mock';

import OrdersList from '.';

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock game item">{children}</div>;
    }
  };
});
jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="mock empty" />;
    }
  };
});

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrdersList items={orderItemsMock} />);

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('mock game item')).toHaveLength(2);
  });

  it('should render the empty state', () => {
    renderWithTheme(<OrdersList />);

    expect(screen.getByTestId('mock empty')).toBeInTheDocument();
  });
});
