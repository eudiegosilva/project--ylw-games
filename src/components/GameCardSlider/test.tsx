import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCardSlider from '.';

const items = [
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Cyber Game',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/ryz0n/300x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
];

describe('<GameCardSlider />', () => {
  it('should render four active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows based on prop color', () => {
    renderWithTheme(<GameCardSlider items={items} colorStyle="white" />);
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FFFFFF'
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FFFFFF'
    });
  });
});
