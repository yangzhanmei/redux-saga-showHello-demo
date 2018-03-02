import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './App'
import reducer from './reducers'
import {helloSaga} from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(helloSaga)

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
