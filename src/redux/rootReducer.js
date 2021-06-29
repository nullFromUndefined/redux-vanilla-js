import { INCREMENT, DECREMENT, UPDATE_DATA } from './types'

export function rootReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    } else if (action.type === UPDATE_DATA) {
        state = action.payload
        return state;
    }
    return state
}
