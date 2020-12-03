import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';

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

  it('should render the primary color style', () => {
    renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      background: '#FFCB00',
      color: '#171717'
    });
  });

  it('should render the secondary color style', () => {
    renderWithTheme(<Button colorStyle="secondary">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      background: '#171717',
      color: '#FFFFFF'
    });
  });

  it('should render the alternative color style', () => {
    renderWithTheme(<Button colorStyle="alternative">Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      background: '#05D9E8',
      color: '#171717'
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
      <Button icon={<ShoppingCartIcon data-testid="icon" />}>Button</Button>
    );

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render a minimal version based in prop', () => {
    renderWithTheme(
      <Button icon={<ShoppingCartIcon data-testid="icon" />} minimal>
        Button
      </Button>
    );

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      background: 'none',
      color: '#FFCB00'
    });

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    );
  });

  it('should render a minimal version with a secondary color style based in prop', () => {
    renderWithTheme(
      <Button
        icon={<ShoppingCartIcon data-testid="icon" />}
        minimal
        colorStyle="secondary"
      >
        Button
      </Button>
    );

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      background: 'none',
      color: '#171717'
    });

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyleRule(
      'color',
      '#454545',
      {
        modifier: ':hover'
      }
    );
  });

  it('should render a minimal version with a alternative color style based in prop', () => {
    renderWithTheme(
      <Button
        icon={<ShoppingCartIcon data-testid="icon" />}
        minimal
        colorStyle="alternative"
      >
        Button
      </Button>
    );

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      background: 'none',
      color: '#05D9E8'
    });

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyleRule(
      'color',
      '#37e0ec',
      {
        modifier: ':hover'
      }
    );
  });

  it('should render a disabled button', () => {
    renderWithTheme(<Button disabled>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    );
  });

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Button
      </Button>
    );

    expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
