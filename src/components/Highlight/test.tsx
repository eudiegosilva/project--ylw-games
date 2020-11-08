import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import * as s from './styles';

import Highlight from '.';

const highlightProps = {
  title: 'highlight title',
  subtitle: 'highlight subtitle',
  buttonLabel: 'button',
  buttonLink: '/link',
  backgroundImage: '/img/cyberpunk-2077-img.png'
};

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...highlightProps} />);

    expect(
      screen.getByRole('heading', { name: /highlight title/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /highlight subtitle/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /button/i })).toBeInTheDocument();
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...highlightProps} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${highlightProps.backgroundImage})`
    });
  });

  it('should render float image', () => {
    renderWithTheme(
      <Highlight {...highlightProps} floatImage="/float-image.png" />
    );

    expect(
      screen.getByRole('img', { name: highlightProps.title })
    ).toHaveAttribute('src', '/float-image.png');
  });

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...highlightProps} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'FLOAT_IMAGE CONTENT'"
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${s.ContentWrapper}`
    });
  });

  it('should render content align left based on prop', () => {
    const { container } = renderWithTheme(
      <Highlight {...highlightProps} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'CONTENT FLOAT_IMAGE'"
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${s.ContentWrapper}`
    });
  });
});
