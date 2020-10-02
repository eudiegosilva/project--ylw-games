import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Banner from '.';

const bannerProps = {
  image: 'https://source.unsplash.com/user/ryz0n/2048x1024',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};

describe('<Banner />', () => {
  it('should succefully render', () => {
    const { container } = renderWithTheme(<Banner {...bannerProps} />);

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /play the new crashlands season/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /defy death/i
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a ribbon', () => {
    renderWithTheme(
      <Banner
        {...bannerProps}
        ribbon="example ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/example ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#171717' });

    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
