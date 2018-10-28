const mongoose = require('mongoose');

var user = mongoose.model('users', {
    name: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = {
    user: user
};