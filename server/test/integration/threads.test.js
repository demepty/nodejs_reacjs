//Modulos para testing

const request= require('supertest');
const chai = require('chai');

//Rutas de archivos de codigo fuente
const mongooseHelper=require('./mongooseHelper');
//como iniccializar la db para probar data de prueba
const fixtures = require('./fixtures');
const app = require('../../src/app'); //2 pts representan una carpeta hacia arriba


const expect = chai.expect;

//funciona para realizar los test de manera legible

describe('Threads end point ', () => {

//before ( async () => await mongooseHelper.connectToDatabase());
//after ( async () => await mongooseHelper.closeConnection());



  describe('When calling Get /threads', () => {

    describe('when data base has threads',()=>{
      before ( async () => await fixtures.seedThreads());
      after ( async () => await mongooseHelper.dropDatabase()); //limpiamos la bd
      it('returns a list of threads', () => {  //esperamos que retorne este tipo de componente
        return request(app).get('/threads')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(response => {
            const {body} = response;
            //expect body
            expect(body.data).to.have.length(2);
            expect(body.data[0].title).to.equal('El sistema de matrícula esta dañado');
            expect(body.data[0].slug).to.equal('el-sistema-de-matricula-esta-danado');
            expect(body.data[1].title).to.equal('El problema de transporte en Panamá');
            expect(body.data[1].slug).to.equal('el-problema-de-transporte-en-panama');
          });
      });

    });


    describe('When the database is no data', () => {
    before ( async () => await mongooseHelper.dropDatabase()); //limpiamos la bd
   after ( async () => await fixtures.seedThreads());

    it('returns an empty array if there are no threads', () => {
      return request(app).get('/threads')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          const {body} = response;
          //expect body
          expect(body.data).to.have.length(0);

        });


    });
  });

  });

  //xit significa que el test se esta saltando

  describe('when calling POST /threads', () => {

    xit('returns an empty array if there are no threads', () => {  //esperamos que retorne este tipo de componente

    });

    xit('returns http code 400 if invalid params are sent ', () => {

    });


  });

});


