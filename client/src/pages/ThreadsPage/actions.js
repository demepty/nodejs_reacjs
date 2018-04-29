export const REQUEST= 'forum-app/LOAD_THREADS_REQUEST'
export const SUCCESS = 'forum-app/LOAD_THREADS_SUCCESS'
export const FAILURE= 'forum-app/LOAD_THREADS_FAILURE'

export function loadThreadsRequest() {
  return { type: REQUEST }
}
​
export function loadThreadsSuccess(threads) {
  return {
    type: SUCCESS,
    payload }
}
​
export function loadThreadsFailure(error) {
  return {
    type: FAILURE,
    error: true,
    payload}
}


