// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Counter from './counter';
import reducer from './CounterSlice'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import React from 'react';

const MockStore = configureStore({
    reducer: {
        counter: reducer
    }
})

// const createMock: React.FC<Counter> = (state) => {
//     return {
//       ...store,
//       getState: () => {
//         return { ...store.getState(), ...state };
//       },
//     };
//   };

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  decorators: [
    () => {
        return (
            <Provider store={MockStore}>
                <Counter />
            </Provider>
        )
    }
  ]
};


type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {}
}

export default meta;