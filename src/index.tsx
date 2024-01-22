import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/styles/index.css'
import {Provider} from "react-redux";
import {createStore} from "redux";
import {eventsReduser} from "./store/reduser";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store:any = createStore(eventsReduser)


root.render(
 <Provider store={store}>
    <App />
 </Provider>
);

