const express = require('express')
const controller = require('../controller/apiController')
const Route = express.Router()

Route.get('/', controller.listar);
Route.get('/:id', controller.buscarPorId);
Route.post('/', controller.postar);
Route.delete('/:id', controller.deletar);

module.exports = Route
