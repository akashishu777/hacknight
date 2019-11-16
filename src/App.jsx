/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
import { predict } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      age: '',
      // eslint-disable-next-line react/no-unused-state
      education: '',
      // eslint-disable-next-line react/no-unused-state
      maritalstatus: '',
      // eslint-disable-next-line react/no-unused-state
      relationship: '',
      // eslint-disable-next-line react/no-unused-state
      race: '',
      // eslint-disable-next-line react/no-unused-state
      sex: '',
    };
  }

  handleAge = e => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ age: e.currentTarget.value });
  };

  handleEducation = e => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ education: e.currentTarget.value });
  };

  handleMarital = e => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ maritalstatus: e.currentTarget.value });
  };

  handleRelationship = e => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ relationship: e.currentTarget.value });
  };

  handleRace = e => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ race: e.currentTarget.value });
  };

  handleSex = e => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ sex: e.currentTarget.value });
  };

  handlePredict = () => {
    // eslint-disable-next-line no-console
    console.log(this.state);
    const arr = [
      this.state.age,
      this.state.education,
      this.state.maritalstatus,
      this.state.relationship,
      this.state.race,
      this.state.sex,
    ];
    predict(arr);
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <HelloWorld title="Welcome to ML Salary Predictor" />
        <div style={{ marginTop: '50px' }}>
          <span>Age</span>{' '}
          <input type="number" onChange={this.handleAge}></input>
          <br />
          <br />
          <span>education</span>{' '}
          <input type="text" onChange={this.handleEducation}></input>
          <br />
          <br />
          <span>maritalstatus</span>{' '}
          <input type="text" onChange={this.handleMarital}></input>
          <br />
          <br />
          <span>relationship</span>{' '}
          <input type="text" onChange={this.handleRelationship}></input>
          <br />
          <br />
          <span>race</span>{' '}
          <input type="text" onChange={this.handleRace}></input>
          <br />
          <br />
          <span>sex</span>
          <select name="sex" onChange={this.handleSex}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />
          <button onClick={this.handlePredict} type="button">
            Predict...
          </button>
        </div>
      </div>
    );
  }
}

export default hot(App);
