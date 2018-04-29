const mongoose = require('mongoose');

const mongoURL = process.env.NODE_ENV ==='test'
?'mongodb://localhost:27017/forum-app-test'
:'mongodb://localhost:27017/forum-app'

mongoose.connect(mongoURL)

module.exports=mongoose;
