import { incremented , decremented , store } from './reduxtesting/reduxindex';
console.clear();

store.subscribe(() => {console.log(store.getState())});
store.dispatch(incremented());
store.dispatch(incremented());

/*
Ejemplo de método reduce en array:

const array1 = [4,7,2,3,4];
//va : valor actual , vc : valor acumulado.
const final = array1.reduce( (va,vc) => { console.log(va,vc) ; return va+vc });
console.log(final);
*/
