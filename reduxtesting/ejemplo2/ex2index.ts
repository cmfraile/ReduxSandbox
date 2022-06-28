import * as ex2 from './counterSlice';

export const ex2main = () => {
    const store = ex2.csex2;
    store.subscribe(() => {console.log(store.getState())});
    store.dispatch(ex2.ex2reduceobj.cambio);
    ex2.ex2reduceobj.consola();
}