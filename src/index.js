import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { App } from './components/App/App';
import './index.css';
import store from './services/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
    
  </Provider>
);