import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import reducer from './store/reducers';
import createSagaMiddleware from 'redux-saga'
import  mySaga  from './sagas'
import { createStore, applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
,document.getElementById('root'));  
registerServiceWorker();







