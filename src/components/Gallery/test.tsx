import 'match-media-mock';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Gallery from '.';

import { mock as galleryItemsMock } from './mock';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={galleryItemsMock.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', galleryItemsMock[0].src);
    expect(
      screen.getByRole('button', { name: /thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', galleryItemsMock[1].src);
  });

  it('should render open modal', () => {
    renderWithTheme(<Gallery items={galleryItemsMock.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');
    const thumb = screen.getByRole('button', {
      name: /thumb - Gallery Image 1/i
    });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    fireEvent.click(thumb);
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should handle close modal when overlay or close button clicked', () => {
    renderWithTheme(<Gallery items={galleryItemsMock.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');
    const thumb = screen.getByRole('button', {
      name: /thumb - Gallery Image 1/i
    });

    fireEvent.click(thumb);

    const closeButton = screen.getByRole('button', {
      name: /close modal/i
    });

    fireEvent.click(closeButton);
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should handle close modal when on ESC key is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={galleryItemsMock.slice(0, 2)} />
    );

    const modal = screen.getByLabelText('modal');
    const thumb = screen.getByRole('button', {
      name: /thumb - Gallery Image 1/i
    });

    fireEvent.click(thumb);
    fireEvent.keyUp(container, { key: 'Escape' });
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={galleryItemsMock.slice(0, 2)} />);

    const thumb = screen.getByRole('button', {
      name: /thumb - Gallery Image 2/i
    });
    fireEvent.click(thumb);

    const image = await screen.findByRole('img', { name: /Gallery Image 2/i });
    expect(image.parentElement?.parentElement).toHaveClass('slick-active');
  });
});
