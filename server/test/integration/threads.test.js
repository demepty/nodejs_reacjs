const request= require('supertest');
const chai = require('chai');

const mongooseHelper=require('./mongooseHelper');
const fixtures = require('./fixtures');
const app = require('../../src/app');
const expect = chai.expect;

describe('Threads end point ', () => {
  describe('When calling Get /threads', () => {
    describe('when data base has threads',()=>{
      before ( async () => await fixtures.seedThreads());

      after ( async () => await mongooseHelper.dropDatabase());

      it('returns a list of threads', () => {
        return request(app).get('/threads')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          const {body} = response;
          expect(body.data).to.have.length(2);
          expect(body.data[0].title).to.equal('El sistema de matrícula esta dañado');
          expect(body.data[0].slug).to.equal('el-sistema-de-matricula-esta-danado');
          expect(body.data[1].title).to.equal('El problema de transporte en Panamá');
          expect(body.data[1].slug).to.equal('el-problema-de-transporte-en-panama');
        });
      });
    });

    describe('When the database is no data', () => {
      before ( async () => await mongooseHelper.dropDatabase());
      after ( async () => await fixtures.seedThreads());
      it('returns an empty array if there are no threads', () => {
        return request(app).get('/threads')
        .expect('Content-Type', /json/)
        .expect(200).then(response => {
          const {body} = response;
          expect(body.data).to.have.length(0);
        });
      });
    });
  });

  describe('when calling POST /threads', () => {
    xit('returns an empty array if there are no threads', () => {
    });
    xit('returns http code 400 if invalid params are sent ', () => {
    });
  });
});
