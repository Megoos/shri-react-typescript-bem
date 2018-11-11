import React, { Component } from 'react';
import appData from '../../data/events.json';
import {Card} from '../Card';
import Footer from '../Footer';
import Header from '../Header';

import './App.scss';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Header />

        <main className="Content">
          <h1 className="Content-Title">Лента событий</h1>
          {
            appData.events.map((cardData, index) => (
                <Card key={index} eventData={cardData} theme={cardData.type}/>
            ))
          }
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
