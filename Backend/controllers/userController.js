const express = require('express');
const router = express.Router();
const userCont = require('../routes/users');

router.get('/users', userCont.getAllUsers);

router.get('/users/:id', userCont.getUserById);

router.post('/users', userCont.saveNewUser);

router.put('/users/:id', userCont.updateUser);

router.delete('/users/:id', userCont.deleteUser);

module.exports = router;