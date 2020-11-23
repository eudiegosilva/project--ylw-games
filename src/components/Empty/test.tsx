import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Empty from '.';

const emptyProps = {
  title: 'a example title',
  description: 'a example description'
};

describe('<Empty />', () => {
  it('should render empty component correctly', () => {
    const { container } = renderWithTheme(<Empty {...emptyProps} hasLink />);

    expect(
      screen.getByRole('image', { name: /hanging joysticks/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /a example title/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/a example description/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not should render link when hasLink is false', () => {
    renderWithTheme(<Empty {...emptyProps} />);

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument();
  });
});
