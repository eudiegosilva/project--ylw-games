import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TextContent from '.';

const textContentProps = {
  title: 'description',
  content: '<h1>content heading</h1>'
};

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...textContentProps} />);

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /content heading/i })
    ).toBeInTheDocument();
  });

  it('should render without title', () => {
    renderWithTheme(<TextContent content={textContentProps.content} />);

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /content heading/i })
    ).toBeInTheDocument();
  });

  it('should render a white text color on mobile screens', () => {
    renderWithTheme(<TextContent {...textContentProps} />);

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement;
    expect(wrapper).toHaveStyle({ color: '#FFFFFF' });
    expect(wrapper).toHaveStyleRule('color', '#000000', {
      media: '(min-width: 768px)'
    });
    expect(wrapper).toHaveStyleRule('background', '#FFFFFF', {
      media: '(min-width: 768px)'
    });
  });
});
