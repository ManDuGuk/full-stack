import { configureStore, createSlice } from "@reduxjs/toolkit";

//slice
//Redux Toolkit의 핵심기능. 액션 생성자와 액션타입, 리듀서를 한번에 생성해주는 함수.

const counterSlice = createSlice({
    name: "myslice",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }

    }
});

export const { increment, decrement } = counterSlice.actions;

//store
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default store;