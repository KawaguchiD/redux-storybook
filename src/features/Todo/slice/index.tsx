import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import React from 'react'

export interface TodoState {
  Todo: String[]
}

const initialState: TodoState = {
    Todo: ["Hello"]
}

const slice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        AddTodo: (state: any, action: PayloadAction<String>) => {
            state.Todo = [...state.Todo, action.payload]
        }
    }
})

export const { AddTodo } = slice.actions 

export default slice.reducer