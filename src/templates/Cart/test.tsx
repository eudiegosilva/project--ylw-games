import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { mock as highlightMock } from 'components/Highlight/mock';
import { mock as itemsMock } from 'components/CartList/mock';
import { mock as paymentCardsMock } from 'components/PaymentOptions/mock';
import { mock as recommendedGamesMock } from 'components/GameCardSlider/mock';

import Cart from '.';

const cartProps = {
  items: itemsMock,
  total: '$ 493,00',
  cards: paymentCardsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: recommendedGamesMock
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock base">{children}</div>;
  }
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock showcase" />;
  }
}));

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock cartList" />;
  }
}));

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock paymentOptions" />;
  }
}));

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock empty" />;
  }
}));

describe('<Cart />', () => {
  it('should render sections correctly', () => {
    renderWithTheme(<Cart {...cartProps} />);

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock base')).toBeInTheDocument();
    expect(screen.getByTestId('mock cartList')).toBeInTheDocument();
    expect(screen.getByTestId('mock paymentOptions')).toBeInTheDocument();
    expect(screen.getByTestId('mock showcase')).toBeInTheDocument();
    expect(screen.queryByTestId('mock empty')).not.toBeInTheDocument();
  });

  it('should render empty section when no have items on cartList', () => {
    renderWithTheme(<Cart {...cartProps} items={[]} />);

    expect(screen.getByTestId('mock empty')).toBeInTheDocument();
  });
});
