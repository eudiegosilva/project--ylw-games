import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('renders with Label', () => {
    renderWithTheme(<TextField label="label" labelFor="field" id="field" />);

    expect(screen.getByLabelText('label')).toBeInTheDocument();
  });

  it('renders without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('label')).not.toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="some placeholder" />);

    expect(screen.getByPlaceholderText('some placeholder')).toBeInTheDocument();
  });

  it('changes its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="textField"
        labelFor="textField"
        id="textField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'this is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('is accessible by tab', () => {
    renderWithTheme(
      <TextField label="textField" labelFor="textField" id="textField" />
    );

    const input = screen.getByLabelText('textField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
