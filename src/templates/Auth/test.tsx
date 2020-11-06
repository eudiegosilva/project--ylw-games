import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should render all content in children', () => {
    renderWithTheme(
      <Auth title="title">
        <input type="text" />
      </Auth>
    );

    expect(screen.getAllByRole('img', { name: /ylw games/i })).toHaveLength(2);
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /ylw is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
