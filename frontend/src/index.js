import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './store/store';

// You can then apply different CSS class styles such as:

// const Search = () => {
//   return <div className={style.nameOfYourCSSClass}>
//            Hello Search Component :)
//          </div>
// }

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Link,
  withRouter
} from 'react-router-dom';








document.addEventListener('DOMContentLoaded', () => {
    let store;
 
      const preloadedState = {}
      store = configureStore(preloadedState);  
      const root = document.getElementById('index');
      ReactDOM.render(<Root store={store} />, root);
      
});


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="root-container">
        <Route path="/" component={()=><div>TEST</div>} /> 
      </div>)
  }
}

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);