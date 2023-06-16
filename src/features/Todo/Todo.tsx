import React from 'react'
import type { RootState } from './slice/store'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo } from './slice/index'
import { TodoState } from './slice/index'

interface TodoType {
    todo: String
}

const Todo = () => {
    const todos = useSelector((state: RootState) => state.todo?.Todo)
    console.log(todos)
    const dispach = useDispatch()
    const Str: String = "World"
    const handleClick = () => dispach(AddTodo(Str))
    return (
        <>
            <p>{todos}</p>
            <button onClick={handleClick}>Button</button>
        </>
    )
}

export default Todo