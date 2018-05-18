const chai = require('chai');

const reducer = require("./reducer");
import * as actions from './actions';

const expect = chai.expect;

describe('Test reducer',()=>{
  describe('Test reducer',()=>{
    it('Action Request',()=>{
      const initialStater=reducer.state;
      initialStater.threads=[];
      initialStater.isLoading=true;
      initialStater.errorMesssage=null;

      expect();
    });
    it('Action Success',()=>{
      const initialStates=reducer.state;
      const action = actions.loadThreadsSuccess(threads);
      initialStates.threads=action.payload;
      initialStates.isLoading=false;
      initialStates.errorMesssage=null;

      expect();
    });
    it('Action Failure',()=>{
      const initialStater=reducer.state;
      const action = actions.loadThreadsFailure(error);
      initialStater.threads=[];
      initialStater.isLoading=false;
      initialStater.errorMesssage=action.payload.error;

      expect();
    });
  });
});
