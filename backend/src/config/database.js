const mongoose = require('mongoose');

const url='mongodb://localhost:27017/ToDoAPP';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false }, () => {
    console.log('Connected on MongoDB!');
});

module.exports = mongoose;
