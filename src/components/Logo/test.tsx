import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a black label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/YLW games/i).parentElement).toHaveStyle({
      color: '#000000'
    });
  });

  it('should render a white label by default', () => {
    renderWithTheme(<Logo color="white" />);
    expect(screen.getByLabelText(/YLW games/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
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
});
