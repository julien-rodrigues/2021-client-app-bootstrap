import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import Dashboard from './containers/Dashboard';
import configureStore from './configureStore';
import { GlobalStyle } from './utils/styles/Global';
import theme from './utils/styles/theme';

const store = configureStore({});

const ClientApp = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App>
        <Dashboard />
      </App>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<ClientApp />, document.getElementById('app-client'));
