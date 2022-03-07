const express = require('express');

// Controllers
// import { getAllToDos } from '../controllers/todos.controller';
const {
  getAllToDos,
  createToDo,
  updateToDoPatch,
  deleteToDo
} = require('../controllers/ToDos.controller');

const router = express.Router();

router.get('/', getAllToDos);

// POST http://localhost:4000/todos
router.post('/', createToDo);

// PATCH http://localhost:4000/todos/:id
router.patch('/:id', updateToDoPatch);

// DELETE http://localhost:4000/todos/:id
router.delete('/:id', deleteToDo);

module.exports = { todosRouter: router };
// module.exports = router // export default router
