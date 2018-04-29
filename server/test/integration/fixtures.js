//como inicializar la db para probar data de prueba
const Thread = require ('../../src/models/Thread');

const seedThreads = async () =>{
  return await Thread.create([
    {
      title:'El sistema de matrícula esta dañado',
      body:'bar',
      slug: '',
    },
    {
      title:'El problema de transporte en Panamá',
      body:'var',
      slug: '',
    },
  ]);
};

module.exports={
  seedThreads,
};
