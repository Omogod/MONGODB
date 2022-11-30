import {Request, Response} from 'express';
import Todo from '../model/todoModel';

export const createTodo = async (req: Request, res: Response) => {

    try {
    const {_id, description, status,} = req.body;

    const todo = await Todo.create({    
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

    } catch(e) {
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            status: 'success',
            data: {
                todos,
            },
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }

}

export const getTodo = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                todo,
            },
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }

}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
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
    catch(e) {
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
}   

export const deleteAllTodos = async (req: Request, res: Response) => {
    try {
        const limit = req.query.limit;
        await Todo.deleteMany({limit})
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({message: "Internal Server Error"});
    }
};
