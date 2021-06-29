import { UPDATE_DATA, DECREMENT, INCREMENT } from './types';

export function updateData(data) {
    return {
        type: UPDATE_DATA,
        payload: data
    }
}

export function decrement() {
    return { type: DECREMENT };
}

export function increment() {
    return { type: INCREMENT };
}
