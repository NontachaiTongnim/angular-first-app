const express = require('express');

const EmployeeController = require('../controllers/employee');

const router = express.Router();

router.get('/', EmployeeController.getAllEmployee);

router.post('/', EmployeeController.postEmployee);

router.put('/', EmployeeController.putEmployee);

router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router;
