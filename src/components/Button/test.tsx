import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size button by default', () => {
    renderWithTheme(<Button>Button Test</Button>);

    expect(screen.getByRole('button', { name: /Button Test/i })).toHaveStyle({
      'font-size': '1.4rem',
      height: '4rem',
      padding: '0.8rem 3.2rem'
    });
  });

  it('should render the small size button', () => {
    renderWithTheme(<Button size="small">Button Test</Button>);

    expect(screen.getByRole('button', { name: /Button Test/i })).toHaveStyle({
      'font-size': '1.2rem',
      height: '3rem'
    });
  });

  it('should render the large size button', () => {
    renderWithTheme(<Button size="large">Button Test</Button>);

    expect(screen.getByRole('button', { name: /Button Test/i })).toHaveStyle({
      'font-size': '1.6rem',
      height: '5rem',
      padding: '0.8rem 4.8rem'
    });
  });
});
