import React from 'react'
import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './CounterSlice'

 const Counter = () => {
    const count = useSelector((state: RootState) => state.counter?.value)
    const dispach = useDispatch()

    return (
        <>
            <p>{count}</p>
            <button onClick={() => dispach(increment())}>increment</button>
            <button onClick={() => dispach(decrement())}>decrement</button>
        </>
    )
}

export default Counter