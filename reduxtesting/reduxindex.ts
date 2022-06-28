import { createSlice , configureStore , ConfigureStoreOptions } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0,zapatillas:'bonitas'},
    reducers:{
        incremented:state => {state.value++},
        decremented:state => {state.value--}
    }
});

export const { incremented , decremented } = counterSlice.actions;
export const store = configureStore({reducer:counterSlice.reducer});





