//https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed

import { configureStore , createSlice, Dispatch } from "@reduxjs/toolkit";
import { random } from "underscore";

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


//+INFO sobre los thunks : 
//https://redux.js.org/tutorials/essentials/part-2-app-structure#writing-async-logic-with-thunks

const ex2reduceobj = {
    inc : counterSlice.actions.incremented(),
    dec : counterSlice.actions.decremented(),
    cbaTHUNK : (dispatch:Dispatch) => {
        setTimeout(() => {dispatch(counterSlice.actions.cba(random(0,10)))},random(1000,2000))
    },
    cambio : zapasSlice.actions.cambio(),
    consola : () => {console.log(zapasSlice.actions.cambio())}
}

const csex2 = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        zapas : zapasSlice.reducer
    }
});

export const ex2main = () => {
    const store = csex2;
    store.subscribe(() => {console.log(store.getState())});
    store.dispatch(ex2reduceobj.cambio);
    store.dispatch(ex2reduceobj.cbaTHUNK)
}