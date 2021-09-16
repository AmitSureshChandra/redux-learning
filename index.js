import redux from 'redux'

// action constants

const BUY_CAKE = 'BUY_CAKE';

// state 

const initialState = () => {
    no_icecream: 10
}

// action creator

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Buy cake'
    }
}

// reducer

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                no_icecream: initialState.no_icecream - 1
            }
        default: return initialState
    }
}

// redux

const store = redux.createStore(reducer)

console.log(store.getState());

store.dispatch(buyCake())

console.log(store.getState());

// unsubscribe();