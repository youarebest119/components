import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LazyMotion } from 'framer-motion';
const loadFeatures = () => import("./utils/features").then(res => res.default)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <LazyMotion strict features={loadFeatures}>
            <App />
        </LazyMotion>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
