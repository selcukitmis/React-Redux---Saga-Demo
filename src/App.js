import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home'
import {Provider} from 'react-redux';
import createStore from './Redux'

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>

            <Home/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;