import React from 'react';
import Header from './Components/Header';
import SettingForm from './Components/SettingsForm';
import { Link, Router, Routes, Route } from 'react-router-dom';

import ToDo from './Components/ToDo/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <>

        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<Header />}
            >
            </Route>
            <Route
              exact path="/setting"
              element={<SettingForm />}
            >
            </Route>

            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          
        </Router>

      </>
    );
  }
}
