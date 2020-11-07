import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>YLW games</Heading>);

    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyle({
      color: '#FFFFFF'
    });
  });

  it('should render a white heading when color prop is passed', () => {
    renderWithTheme(<Heading color="secondary">YLW games</Heading>);

    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyle({
      color: '#171717'
    });
  });

  it('should render heading with a line to the left side when lineLeft prop is passed', () => {
    renderWithTheme(<Heading lineLeft>YLW games</Heading>);

    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyle({
      'border-left': '0.7rem solid #FFCB00'
    });
  });

  it('should render heading with a line at the bottom when lineBottom prop is passed', () => {
    renderWithTheme(<Heading lineBottom>YLW games</Heading>);

    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #FFCB00',
      {
        modifier: '::after'
      }
    );
  });

  it('should render heading with a small size', () => {
    renderWithTheme(<Heading size="small">YLW games</Heading>);

    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyle({
      'font-size': '1.6rem'
    });
    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    );
  });

  it('should render heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">YLW games</Heading>);

    expect(screen.getByRole('heading', { name: /ylw games/i })).toHaveStyle({
      'font-size': '5.2rem'
    });
  });

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Heading
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /heading/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #FFCB00' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #FFCB00', {
      modifier: '::after'
    });
  });

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Headingd
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /heading/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #171717' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #171717', {
      modifier: '::after'
    });
  });
});
