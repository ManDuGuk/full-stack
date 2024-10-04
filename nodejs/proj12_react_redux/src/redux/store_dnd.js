import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
    name: "position",
    initialState: {
        x: 100,
        y: 100
    },
    reducers: {
        setPositon: (state, action) => {
            state.x = action.payload.x;
            state.y = action.payload.y;
        }
    }
});

export const { setPositon } = positionSlice.actions;
export default positionSlice.reducer;