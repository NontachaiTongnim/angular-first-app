const Employee = require('../models/employee');

exports.getAllEmployee = async (req, res, next) => {
  try {
    const [allEmployee] = await Employee.fetchAll();
    res.status(200).json(allEmployee);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postEmployee = async (req, res, next) => {
  try {
    const postResponse = await Employee.post(req.body.item);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putEmployee = async (req, res, next) => {
  try {
    const putResponse = await Employee.update(req.body.id, req.body.item);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const deleteResponse = await Employee.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
