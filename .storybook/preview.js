import { addDecorator } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import results from '../.jest-test-results.json';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBackgroundColor />
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'dark',
        value: theme.colors.secondary
      },
      {
        name: 'black',
        value: theme.colors.black
      },
      {
        name: 'yellow',
        value: theme.colors.primary
      },
      {
        name: 'white',
        value: theme.colors.white
      }
    ]
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
};

addDecorator(withTests({ results }));
addDecorator(withNextRouter());
