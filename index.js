import {applyMiddleware, createStore, combineReducers } from 'redux'

// action constants

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

// state 

const initialCakeState = () => {
    return {
        no_of_cake: 10
    }
}

const initialIcecreamState = () => {
    return {
        no_of_icecream: 10
    }
}

// action creator

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Buy cake'
    }
}

const buyIcecream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'Buy icecream'
    }
}

// reducer

const cake_reducer = (state = initialCakeState(), action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                no_of_cake: state.no_of_cake - 1
            }
        default: return state
    }
}

const icecream_reducer = (state = initialIcecreamState(), action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                no_of_icecream: state.no_of_icecream - 1
            }
        default: return state
    }
}

// redux

const combine_reducers = combineReducers({
    cake: cake_reducer,
    ice_cream: icecream_reducer
})

const logger = store => next => action => {
    console.log({action});
    const result = next(action);
    console.log({state: store.getState()});
    return result;
}

const store = createStore(combine_reducers, applyMiddleware(logger))

store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
// unsubscribe();