import React from 'react';
import ReactDOM from 'react-dom/client';
import FontFaceObserver from 'fontfaceobserver';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from 'components/common/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const font1 = new FontFaceObserver('Playfair Display');
const font2 = new FontFaceObserver('Lexend');
const font3 = new FontFaceObserver('Estonia');
const font4 = new FontFaceObserver('Phudu');

Promise.all([font1.load(), font2.load(), font3.load(), font4.load()]).then(() => {
    root.render(
        <React.StrictMode>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </React.StrictMode>,
    );
});

reportWebVitals();
