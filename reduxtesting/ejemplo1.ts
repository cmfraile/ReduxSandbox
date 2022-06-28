import { createSlice , configureStore , ConfigureStoreOptions } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0,zapatillas:'bonitas'},
    reducers:{
        incremented:state => {state.value++},
        decremented:state => {state.value--}
    }
});

export const ejemplo1main = () => {
    const { incremented , decremented } = counterSlice.actions;
    const store = configureStore({reducer:counterSlice.reducer});
    store.subscribe(() => {console.log(store.getState())});
    store.dispatch(incremented());
    store.dispatch(decremented());
}

/* CONCEPTOS IMPORTANTES:
- ACTIONS : objeto que contiene un type y un payload. Ese Type es un string que da detalles sobre la acción concreta, y el payload es la acción en si.
- REDUCER : resultado de la acción sobre un state , que causa un nuevo state.
- STORE : Objeto que guarda el state y ofrece parte de los métodos para trabajarlo. En este ejemplo creamos un "Slice", que seria parte del store, pues el store alberga el estado global de la app, con mucha mas información.
- DISPATCH : añadiendo un reducer como argumento, le indicas al store que con su propio estado y la acción indicada en el reducer, cause el efecto indicado.

https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif
*/