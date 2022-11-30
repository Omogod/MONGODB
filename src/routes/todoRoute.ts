import express from 'express';
import {createTodo, getTodos, updateTodo, deleteTodo, deleteAllTodos} from '../controller/todoController';

const router = express.Router();

router.post("/create", createTodo);
router.get("/get-todo", getTodos);
router.patch("/update-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);
router.delete("/delete-all-todos", deleteAllTodos);

export default router;

