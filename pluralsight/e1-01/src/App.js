import React, { Component } from 'react';
import './App.scss';
import CardList from './CardList'
import Form from './Form'
import axios from 'axios'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     profiles: testData
  //   }
  // }

  state = {
    profiles: [],
    input: ''
  }

  changeInput = (input) => {
    this.setState({
      input
    })
  }

  addNewProfile = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res => {
        this.setState(prevState => ({
          profiles: [...prevState.profiles, res.data],
          input: ''
        }))
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    return (
      <>
        <div className="header">
          {this.props.title}
        </div>
        <Form input={this.state.input} onSubmit={this.addNewProfile} changeInput={this.changeInput} />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

export default App;
