import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the correctly text', () => {
    renderWithTheme(<Ribbon>Ribbon</Ribbon>);

    expect(screen.getByText(/ribbon/i)).toBeInTheDocument();
  });

  it('should render the primary color by default', () => {
    renderWithTheme(<Ribbon>Ribbon</Ribbon>);

    expect(screen.getByText(/ribbon/i)).toHaveStyleRule(
      'background-color',
      '#FFCB00'
    );
  });

  it('should render the secondary color', () => {
    renderWithTheme(<Ribbon colorStyle="secondary">Ribbon</Ribbon>);

    expect(screen.getByText(/ribbon/i)).toHaveStyleRule(
      'background-color',
      '#171717'
    );
  });

  it('should render the normal size by default', () => {
    renderWithTheme(<Ribbon>Ribbon</Ribbon>);

    expect(screen.getByText(/ribbon/i)).toHaveStyle({
      fontSize: '1.4rem',
      height: '3.6rem'
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<Ribbon size="small">Ribbon</Ribbon>);

    expect(screen.getByText(/ribbon/i)).toHaveStyle({
      fontSize: '1.2rem',
      height: '2.6rem'
    });
  });
});
