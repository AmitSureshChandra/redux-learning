import redux from 'redux'

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

const combineReducers = redux.combineReducers({
    cake: cake_reducer,
    ice_cream: icecream_reducer
})

const store = redux.createStore(combineReducers)

console.log(store.getState());

store.dispatch(buyCake());

console.log(store.getState());

store.dispatch(buyIcecream());

console.log(store.getState());

store.dispatch(buyCake());

console.log(store.getState());

// unsubscribe();