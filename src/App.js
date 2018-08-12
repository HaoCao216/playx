import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import Shop from './views/Shop';
import Header from './layout/Header'
import Footer from './layout/Footer'
class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
