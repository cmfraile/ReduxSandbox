//https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed

import { configureStore , createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        incremented:state => {state.value++},
        decremented:state => {state.value--},
        cba:(state,action) => {state.value += action.payload} 
    }
});

const zapasSlice = createSlice({
    name:'zapatillas',
    initialState:{bonitas:false},
    reducers:{cambio:state => {state.bonitas = !state.bonitas}}
});

export const ex2reduceobj = {
    inc : counterSlice.actions.incremented(),
    dec : counterSlice.actions.decremented(),
    cba : (amount:any) => (dispatch:any) => {
        setTimeout(() => dispatch(counterSlice.actions.cba()))
    },
    cambio : zapasSlice.actions.cambio(),
    consola : () => {console.log(zapasSlice.actions.cambio())}
}

export const csex2 = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        zapas : zapasSlice.reducer
    }
});


