function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      return [
        // From start to one we want to delete
        ...state.slice(0, action.i),
        // To last from one we want to delete
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // Take current state
      ...state,
      // Overwrite this post with new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
