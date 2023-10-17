import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize';
import { GlobalStyles, theme } from 'styles';
import { store, persistor } from 'redux/store';
import { Global, ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from 'components/App';
import './index.css';
import { StyleSheetManager } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  <StyleSheetManager shouldForwardProp={prop => prop !== 'component'}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/YourPet">
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <App />
          </ThemeProvider>
        </BrowserRouter>
        <ToastContainer position="bottom-right" />
      </PersistGate>
    </Provider>
  </StyleSheetManager>
  //    </React.StrictMode>
);
