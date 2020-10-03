import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import BannerSlider from '.';

const items = [
  {
    image: 'https://source.unsplash.com/user/ryz0n/2048x1024',
    title: 'Title example I',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'get more',
    buttonLink: '/games/te1',
    ribbon: 'soon'
  },
  {
    image: 'https://source.unsplash.com/user/ryz0n/2048x1024',
    title: 'Title example II',
    subtitle: '<p>Lorem ipsum <strong>dolor</strong> sit amet',
    buttonLabel: 'get more',
    buttonLink: '/games/te2',
    ribbon: 'soon'
  }
];

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
  });

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);

    expect(
      screen.getByRole('heading', { name: /title example i/i, hidden: false })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /title example ii/i, hidden: true })
    ).toBeInTheDocument();
  });

  it('should render with dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector('.slick-dots')).toBeInTheDocument();
  });
});
