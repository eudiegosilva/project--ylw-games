import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import theme from 'styles/theme';

import Radio from '.';

describe('<Radio />', () => {
  it('should render with a white label', () => {
    const { container } = renderWithTheme(
      <Radio label="radio" labelFor="check" value="value" />
    );

    const label = screen.getByText('radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with a dark label', () => {
    renderWithTheme(<Radio label="radio" labelColor="secondary" />);

    const label = screen.getByText('radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.secondary });
  });

  it('should render without label', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText('radio')).not.toBeInTheDocument();
  });

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Radio label="radio" labelFor="radio" onCheck={onCheck} value="value" />
    );

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByLabelText('radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('value');
  });

  it('Should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />);
    const radio = screen.getByLabelText('Radio');

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(radio).toHaveFocus();
  });
});
