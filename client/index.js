import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/index.css';

// Import Components
import App from './components/App';
import Single from './components/Single';
import Layout from './components/Layout';

// React router dependancies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    {/* Provider tag exposes store to entire application */}
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Layout} /> {/* Default Route*/}
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
