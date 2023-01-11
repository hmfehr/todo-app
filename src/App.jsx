import React from 'react';
import Header from './Components/Header';

import ToDo from './Components/ToDo/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <ToDo />
      </>
    );
  }
}
