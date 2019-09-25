import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculate() {
    const amountDue = Number(this.state.amountDue);
    const amountReceived = Number(this.state.amountReceived);
    const totalCentsToReturn = (amountReceived - amountDue) * 100;


    this.setState({
      changeDue: (amountReceived - amountDue).toFixed(2),
      twenties: Math.floor((totalCentsToReturn) / 2000),
      tens: Math.floor((totalCentsToReturn % 2000) / 1000),
      fives: Math.floor(((totalCentsToReturn % 2000) % 1000) / 500),
      ones: Math.floor((((totalCentsToReturn % 2000) % 1000) % 500) / 100),
      quarters: Math.floor(((((totalCentsToReturn % 2000) % 1000) % 500) % 100) / 25),
      dimes: Math.floor((((((totalCentsToReturn % 2000) % 1000) % 500) % 100) % 25) / 10),
      nickels: Math.floor(((((((totalCentsToReturn % 2000) % 1000) % 500) % 100) % 25) % 10) / 5),
      pennies: Math.ceil(((((((totalCentsToReturn % 2000) % 1000) % 500) % 100) % 25) % 10) % 5),
    });
  }

  render() {
    return (
      <div className='contentwrapper'>

        <div className= 'border' id='title'>
          <header>
            Change Calculator
          </header>
        </div>

      <div id='inputs'>
        <div className= 'border' id='inputInfo'>
          <div id='titleInput'>
            <h2>Enter Information</h2>
          </div>

          <div id='inputFields'>
            <label>How much is due?</label>
            <input name="amountDue" id="input" value={this.state.amountDue} onChange={this.handleChange} type='number'></input>
            <label>How much is received?</label>
            <input name="amountReceived" id ='input' value={this.state.amountReceived} onChange={this.handleChange} type='number'></input>
            <button name="submit" id='myButton' className="btn btn-primary" type="button" onClick={this.calculate}>Calculate</button>
          </div>
      </div>

          <div id='output-body'>

            <div id='totalChangeView'>
              <h3>The total change due is ${this.state.changeDue}</h3>
            </div>

            <div id='changeView'>

              <div className='changeOutput'>
                <h4>Twenties</h4>
                <h6>{this.state.twenties}</h6>
              </div>

              <div className='changeOutput'>
                <h4>Tens</h4>
                <h6>{this.state.tens}</h6>
              </div>

              <div className='changeOutput'>
                <h4>Fives</h4>
                <h6>{this.state.fives}</h6>
              </div>

              <div className='changeOutput'>
                <h4>Ones</h4>
                <h6>{this.state.ones}</h6>
              </div>

              <div className='changeOutput'>
                <h4>Quarters</h4>
                <h6>{this.state.quarters}</h6>
              </div>

              <div className='changeOutput'>
                <h4>Dimes</h4>
                <h6>{this.state.dimes}</h6>
              </div>

              <div className='changeOutput'>
                <h4>Nickels</h4>
                <h6>{this.state.nickels}</h6>
              </div>

              <div className='changeOutput'>
                <h4>Pennies</h4>
                <h6>{this.state.pennies}</h6>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
