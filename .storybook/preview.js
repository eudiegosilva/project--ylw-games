import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import { ThemeProvider } from 'styled-components';

import results from '../.jest-test-results.json';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

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
  }
};

addDecorator(withTests({ results }));
