const mongoose = require('mongoose');

mongoose.connect('mongodb://mayank83p:mayank83p@ds135993.mlab.com:35993/mean', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('connected to mongo DB database');
    } else {
        console.log('Error while connecting to the database' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;