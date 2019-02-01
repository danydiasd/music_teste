import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import{BrowserRouter as Router} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

const Music_Teste = () =>(
  <Router>
    <Music_Teste />
  </Router>

)



ReactDOM.render(<Music_Teste />, document.getElementById('root'));
registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
