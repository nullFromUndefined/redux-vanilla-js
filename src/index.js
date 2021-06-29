import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { updateData, decrement, increment } from './redux/action';
import './styles.css';

const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const division = document.getElementById('division');
const inputNumber = document.getElementById('input-number');

// создаем глобальный state
const store = createStore(rootReducer, 'Введи значение в строку))');

input.addEventListener('input', (event) => {
    store.dispatch(updateData(+event.target.value));
    console.log('store.getState().counter', store.getState());
})

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
})

// подписываемся на события изменения store
store.subscribe(() => {
    const valueState = store.getState();
    inputNumber.innerHTML = valueState;
    division.innerHTML = typeof valueState === 'string' ? valueState : valueState / 2;
})

// инициализируем state
store.dispatch({type: 'INIT_APPLICATION'});
