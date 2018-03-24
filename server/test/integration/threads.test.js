//Modulos para testing

const request= require('supertest');
const chai = require('chai');

//Rutas de archivos de codigo fuente
const mongooseHelper=require('./mongooseHelper');
const fixtures = require('./fixtures');
const app = require('../../src/app'); //2 pts representan una carpeta hacia arriba


const expect = chai.expect;

//funciona para realizar los test de manera legible

describe('Threads end point ', () => {

//before ( async () => await mongooseHelper.connectToDatabase());
//after ( async () => await mongooseHelper.closeConnection());

  describe('When calling Get /threads', () => {

    before ( async () => await fixtures.seedThreads());
    after ( async () => await mongooseHelper.dropDatabase());
    it('returns a list of threads', () => {
      return request(app).get('/threads')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          const {body} = response;
          //expect body
          expect(body.data).to.have.length(2);
          expect(body.data[0].title).to.equal('El sistema de matricula dañado');
          expect(body.data[1].title).to.equal('El problema de transporte en Panama');

        });
    });

    xit('returns an empty array if there are no threads', () => {

    });
  });

  //xit significa que el test se esta saltando

  describe('when calling POST /threads', () => {
    xit('Creates a new threads', () => {

    });

    xit('returns http code 400 if invalid params are sent ', () => {

    });


  });

});


