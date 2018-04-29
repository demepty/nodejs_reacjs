const initialState = {
  threads:[],
  idLoading:false,
  erroMessage:null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'forum-app/THREADS_LOAD_REQUEST':
    return state;
    break;
    case 'forum-app/THREADS_LOAD_SUCCESS':
    return state;
    break;
    case 'forum-app/THREADS_LOAD_FAILURE':
    return state;
    break;
    default:
    break;
  }
};

