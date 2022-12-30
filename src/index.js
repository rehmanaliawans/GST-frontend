import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

import App from './App';
import ThemeContext from './context/ThemeContext';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SimpleReactLightbox>
        <BrowserRouter>
          <ThemeContext>
            <App />
          </ThemeContext>
        </BrowserRouter>
      </SimpleReactLightbox>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
