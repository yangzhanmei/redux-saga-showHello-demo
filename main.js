import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'

import Counter from './App'
import reducer from './reducers'

const store = createStore(reducer)

const action = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
        />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
