import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// Connect will inject data from store into any component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main); // Add state and actions to props of Main component

export default App;
