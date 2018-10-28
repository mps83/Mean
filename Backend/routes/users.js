const ObjectId = require('mongoose').Types.ObjectId;

const {
    user
} = require('../models/users');


exports.getAllUsers =  (req, res) => {
    user.find((err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            console.log('Error in retriving users' + JSON.stringify(err, undefined, 2));
        }
    })
};

exports.getUserById = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send(`No record with given Id ${req.params.id}`);
    } else {
        user.findById(req.params.id, (err, doc) => {
            if (!err) {
                res.json(doc);
            } else {
                console.log('Error in retiving user' + JSON.stringify(err, undefined, 2));
            }
        });
    };
};

exports.saveNewUser =  (req, res) => {
    var usr = new user({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email
    });
    usr.save((err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            console.log('Error while saving user' + JSON.stringify(err, undefined, 2));
        }
    })
};

exports.updateUser =  (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send(`No record with given Id ${req.params.id}`);
    } else {
        var usr = {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        };
        user.findOneAndUpdate(req.params.id, {
            $set: usr
        }, {
            new: true
        }, (err, doc) => {
            if (!err) {
                res.json(doc);
            } else {
                console.log("Error while updating user" + JSON.stringify(err, undefined, 2));
            }
        });
    };
};

exports.deleteUser =  (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send(`No record with given Id ${req.params.id}`);
    } else {
        console.log(req.params.id);
        user.findOneAndDelete(req.params.id, (err, doc) => {
            if (!err) {
                res.json(doc);
            } else {
                console.log('Eroor while deleting user ' + JSON.stringify(err, undefined, 2));
            };
        });
    };
};
