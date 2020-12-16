import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';

const Dashboard = () => {
  return <h2>Dashboard</h2>
}

const SurveryNew = () => {
  return <h2>SurveryNew</h2>
}

const App = ({ fetchUser }) => {

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveryNew} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default connect(null, actions)(App);