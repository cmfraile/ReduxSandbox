//https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed

import { configureStore , createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        incremented:state => {state.value++},
        decremented:state => {state.value--},
        incdecbyamount : (state,action) => { state.value += action.payload }
    }
});

export const incasync = (amount:any) => (dispatch:any) => {setTimeout(() => {dispatch(incdecbyamount(amount))},1000)};
export const { incremented , decremented , incdecbyamount } = counterSlice.actions;
export const selectorCount = (state:any) => state.counter.value;

export default counterSlice.reducer;



