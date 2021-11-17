import React from 'react';

import '../node_modules/antd/dist/antd.css';

import { render } from 'react-dom';

import { store, persistor } from './store/app.store';

import { App } from './containers/app';

const targetHTMLElement = document.getElementById('root');

render(<App store={store} storePersistor={persistor} />, targetHTMLElement);
