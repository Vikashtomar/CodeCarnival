const express = require('express');
const 

router = express.Router();
const userController = require('../controller/UserController');  

router.get('/:id?', userController.get);

router.post('/', userController.post);

router.put('/:id', userController.put);

router.delete('/:id', userController.delete);

module.exports = router;
