import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/YLW games/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
    });
  });

  it('should render a secondary label color based on prop', () => {
    renderWithTheme(<Logo color="secondary" />);
    expect(screen.getByLabelText(/YLW games/i).parentElement).toHaveStyle({
      color: '#171717'
    });
  });

  it('should render a normal size logo by defaul', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/YLW games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('should render a bigger size logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/YLW games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('should render a logo without text on mobile if hideOnMobile attribute', () => {
    renderWithTheme(<Logo hideTextOnMobile />);
    expect(screen.getByLabelText(/YLW games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });

  it('should render a logo with id', () => {
    const { container } = renderWithTheme(<Logo id="testId" />);
    expect(container.querySelector('#paint_linear_testId')).toBeInTheDocument();
  });
});
