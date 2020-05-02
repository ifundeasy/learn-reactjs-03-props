import React, { Component } from 'react';
import Table from './table';

class App extends Component {
  characters = [
    {
      name: 'Charlie',
      job: 'Janitor'
    },
    {
      name: 'Mac',
      job: 'Bouncer'
    },
    {
      name: 'Dee',
      job: 'Aspring actress'
    },
    {
      name: 'Dennis',
      job: 'Bartender'
    }
  ];
  render() {
    const charactersToo = [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ];

    return (
      <>
        <h1
          style={{
            width: '100%',
            backgroundColor: '#e8e8e8',
            marginTop: '0px'
          }}>
          React App
        </h1>
        <Table myData={this.characters} />
        <Table myData={charactersToo} />
      </>
    );
  }
}

export default App;
