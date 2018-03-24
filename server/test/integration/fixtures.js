const Thread = require ('../../src/models/Thread');

const seedThreads = async () =>{
 return await Thread.create([
 {
  title:'foo',
  body:'bar',
  slug: '',
 },
{
  title:'foo',
  body:'var',
  slug: '',
},
 ]);
};

module.exports={
seedThreads,

};
