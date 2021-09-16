import redux from 'redux'

// action constants

const BUY_CAKE = 'BUY_CAKE';

// state 

const initialState = () => {
    return {
        no_of_cake: 10
    }
}

// action creator

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Buy cake'
    }
}

// reducer

const reducer = (state = initialState(), action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                no_of_cake: state.no_of_cake - 1
            }
        default: return state
    }
}

// redux

const store = redux.createStore(reducer)

console.log(store.getState());

store.dispatch(buyCake())

console.log(store.getState());

// unsubscribe();