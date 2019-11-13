import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');


class App extends Component {
  state={
    data:[]
  }

  componentDidMount() {
    axios.get('https://source.unsplash.com/random')
      .then(response => this.setState({data:response.config}))

  }


  render() {
    return (
      <>
      <div className='Ran_img'> Random Image Lib </div>
      <img src={this.state.data.url} width='100%' hight='100%'/>

      </>
    );
  }

}

export default App;
