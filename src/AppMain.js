import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeRedux from './apps/AppRedux/storeRedux';
import storeReduxToolkit from './apps/AppReduxToolkit/storeReduxToolkit';

import Navigation from './components/Navigation';
import App from './apps/App/App';
import AppRedux from './apps/AppRedux/AppRedux';
import AppReduxToolkit from './apps/AppReduxToolkit/AppReduxToolkit';

import { ToastContainer } from 'react-toastify';
import styles from './AppMain.module.css';

const AppMain = () => {
  return (
    <div className={styles.App}>
      <ToastContainer autoClose={2000} />
      <Navigation />
      <div className={styles.counterBox}>
        <Switch>
          <Route path="/redux-toolkit">
            <Provider store={storeReduxToolkit}>
              <AppReduxToolkit />
            </Provider>
          </Route>

          <Route path="/redux">
            <Provider store={storeRedux}>
              <AppRedux />
            </Provider>
          </Route>

          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AppMain;