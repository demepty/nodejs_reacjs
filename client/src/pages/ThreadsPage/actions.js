export const REQUEST= 'forum-app/LOAD_THREADS_REQUEST'
export const SUCCESS = 'forum-app/LOAD_THREADS_SUCCESS'
export const FAILURE= 'forum-app/LOAD_THREADS_FAILURE'

export function loadThreadsRequest() {
  return
  {
    type: REQUEST
  }
}
​
export function loadThreadsSuccess(threads) {
  return
  {
    type: SUCCESS,
    payload : threads
  }
}
​
export function loadThreadsFailure(error) {
  return
  {
    type : FAILURE,
    payload : error,
    error: true,
  }
}

function loadThreads() {
  return dispatch=>{
    dispatch( loadThreadsRequest());
    fetch('flowers.jpg').then(function(response) {
      if(response.ok) {
        response.then(function() {
          loadThreadsSuccess(threads);

        });
      } else {
        loadThreadsError(error);
        console.log('Network response was not ok.');
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
}
