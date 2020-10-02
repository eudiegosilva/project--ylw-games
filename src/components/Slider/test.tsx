import 'match-media-mock';
import { render, screen } from '@testing-library/react';

import Slider from '.';

describe('<Slider />', () => {
  it('should render children as slider', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 2, infinite: true }}>
        <span>item 01</span>
        <span>item 02</span>
      </Slider>
    );

    expect(
      screen.getByText(/item 01/i).parentElement?.parentElement
    ).toHaveClass('slick-slide');

    expect(
      screen.getByText(/item 02/i).parentElement?.parentElement
    ).toHaveClass('slick-slide');

    expect(container.firstChild).toMatchSnapshot();
  });
});
