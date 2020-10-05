import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />);
  });
});
