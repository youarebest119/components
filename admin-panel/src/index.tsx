import "bootstrap/dist/css/bootstrap.min.css";
import { LazyMotion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './app/store';
import './index.scss';
import reportWebVitals from './reportWebVitals';
const loadFeatures = () => import("./utils/features").then(res => res.default)
let persistor = persistStore(store);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <LazyMotion strict features={loadFeatures}>
            <Provider store={store}>
                <PersistGate loading={"loading..."} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </LazyMotion>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
