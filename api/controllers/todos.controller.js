// Models
const { Todos } = require('../models/todos.model');

// Utils
const { filterObj } = require('../util/filterObj');

// Get all todos
// export const getAllToDos
exports.getAllToDos = async (req, res) => {
  try {
    // SELECT * FROM posts WHERE status = 'active'; -> todos[]
    const todos = await Todos.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: {
        todos
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// Save todo to database
exports.createToDo = async (req, res) => {
  try {
    const { title } = req.body;

    // INSERT INTO todo (title) VALUES ('A new todo')
    const newTodo = await Todos.create({
      title: title // dbColumn: valueToInsert
    });

    res.status(201).json({
      status: 'success',
      data: { newTodo }
    });
  } catch (error) {
    console.log(error);
  }
};

// Update todo (patch)
exports.updateToDoPatch = async (req, res) => {
  try {
    const { id } = req.params;
    const data = filterObj(req.body, 'title'); // { title }

    const todo = await Todos.findOne({
      where: { id: id, status: 'active' }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update To Do, invalid ID'
      });
      return;
    }

    await todo.update({ ...data }); // .update({ title})

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

// Delete todo
exports.deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todos.findOne({
      where: { id: id, status: 'active' }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete To Do, invalid ID'
      });
      return;
    }

    // Soft delete
    await todo.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
