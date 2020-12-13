import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import ProfileTemplate from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}));

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock template base">{children}</div>;
    }
  };
});

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="mock profile menu"></div>;
    }
  };
});

describe('<Profile />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <ProfileTemplate>
        <h1>my orders</h1>
      </ProfileTemplate>
    );

    expect(screen.getByTestId('mock template base')).toBeInTheDocument();
    expect(screen.getByTestId('mock profile menu')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument();
  });
});
