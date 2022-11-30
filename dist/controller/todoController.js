"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllTodos = exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = async (req, res) => {
    try {
        const { _id, description, status, } = req.body;
        const todo = await todoModel_1.default.create({
            _id,
            description,
            status,
        });
        res.status(201).json({
            status: 'success',
            data: {
                todo,
            },
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.createTodo = createTodo;
const getTodos = async (req, res) => {
    try {
        const todos = await todoModel_1.default.find({});
        res.status(200).json({
            status: 'success',
            data: {
                todos,
            },
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getTodos = getTodos;
const getTodo = async (req, res) => {
    try {
        const todo = await todoModel_1.default.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                todo,
            },
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getTodo = getTodo;
const updateTodo = async (req, res) => {
    try {
        const todo = await todoModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                todo,
            },
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    try {
        await todoModel_1.default.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.deleteTodo = deleteTodo;
const deleteAllTodos = async (req, res) => {
    try {
        const limit = req.query.limit;
        await todoModel_1.default.deleteMany({ limit });
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.deleteAllTodos = deleteAllTodos;
