import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import ProfileTemplate from '.';

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
        <h1>content</h1>
      </ProfileTemplate>
    );

    expect(screen.getByTestId('mock profile menu')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument();
  });
});
