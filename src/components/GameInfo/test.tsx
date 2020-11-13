import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

import { gameInfoMock as gameInfoProps } from './mock';

describe('<GameInfo />', () => {
  it('should render game info', () => {
    const { container } = renderWithTheme(<GameInfo {...gameInfoProps} />);

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/\$99,99/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ad eveniet maxime cumque, excepturi nihil delectus tempore quaerat distinctio facere/i
      )
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...gameInfoProps} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});
