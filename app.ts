import { incremented , decremented , store } from './reduxtesting/reduxindex';
console.clear();
console.log('Hola mundo');

store.subscribe(() => {console.log(store.getState())});

store.dispatch(incremented());
store.dispatch(incremented());


