import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size button by default', () => {
    const { container } = renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      'font-size': '1.4rem',
      height: '4rem',
      padding: '0.8rem 3.2rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size button', () => {
    renderWithTheme(<Button size="small">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      'font-size': '1.2rem',
      height: '3rem'
    });
  });

  it('should render the large size button', () => {
    renderWithTheme(<Button size="large">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      'font-size': '1.6rem',
      height: '5rem',
      padding: '0.8rem 4.8rem'
    });
  });

  it('should render full width button', () => {
    renderWithTheme(<Button fullWidth>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      width: '100%'
    });
  });

  it('should render button with icon based in prop', () => {
    renderWithTheme(
      <Button icon={<ShoppingCart data-testid="icon" />}>Button</Button>
    );

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
