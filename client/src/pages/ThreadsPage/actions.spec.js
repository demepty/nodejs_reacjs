import * as actions from './actions';

const chai = require('chai');
const expect = chai.expect;

describe('Test actions by redux',()=>{
  describe('Test actions functions',()=>{
    it('loadThreadsRequest test',()=>{
      const action = actions.loadThreadsRequest();
      expect(action.type).toBe('forum-app/LOAD_THREADS_REQUEST');
    });

    it('loadThreadsSuccess test',()=>{
      const threads = [{title: 'foo', body: 'bar'}];
      const action = actions.loadThreadsSuccess(threads);
      expect(action.payload).toBe(threads);
    });
  });
});
