import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependancies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Optional Error logging app
// import Raven from 'raven-js';
// import { sentry_url } from './data/config';

// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'asdfkl;asfda',
//     userLevel: 'editor'
//   }
// }).install();

// console.log(window.doesNotExist.nope);

const router = (
  <Provider store={store}>
    {/* Provider tag exposes store to entire application */}
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} /> {/* Default Route*/}
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
