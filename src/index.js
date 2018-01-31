import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons/css/tachyons.min.css'
import Temp from './Temp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Temp />, document.getElementById('root'));
registerServiceWorker();
