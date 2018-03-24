const mongoose = require('mongoose');

const connectToDatabase = async () => {

 if (mongoose.connection.db) {

   return;

 }


 try {

   return await mongoose.connect('mongodb://localhost:27017/forum-app-test');

 } catch (err) {

   throw new Error('Could not connect to MongoDB. Make sure it\'s running');

 }

};



const dropDatabase = async () => {

 await mongoose.connection.db.dropDatabase();

};



const closeConnection = async () => {

 if (! mongoose.connection.db) {

 }



 await dropDatabase();

 return mongoose.connection.close();

};



module.exports = {

 connectToDatabase,

 dropDatabase,

 closeConnection,

};
