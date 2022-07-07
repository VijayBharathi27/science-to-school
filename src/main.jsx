import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { createTheme, ThemeProvider } from '@mui/material';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', //black
    },
    secondary: {
      main: '#080808', //grey
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
