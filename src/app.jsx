import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        amountDue : 0,
        amountReceived : 0,
        totalChange : 0,
        twenties : 0,
        tens : 0,
        fives : 0,
        ones: 0,
        quarters : 0,
        dimes : 0,
        nickels : 0,
        pennies : 0,
    } 
      this.calculate=this.calculate.bind(this);
  }

  handleInputChange (e) {
    this.setState({ [e.target.name] : e.target.value});
  }

  calculate (e) {
    e.preventDefault();
    var received = document.getElementById("amount-received").value;
    var due = document.getElementById("amount-due").value;
    var change = received - due;

    dollars = Math.floor(change/1);
    change = (change % 1).toFixed(2);
    
    quarters = Math.floor(change/.25);
    change = (change % .25).toFixed(2);

    dimes = Math.floor(change/.10);
    change = (change % .10).toFixed(2);
   
    nickels = Math.floor(change/.05);
    change = (change % .05).toFixed(2);
    
    pennies = Math.floor(change/.01);
    change = (change % .01).toFixed(2);

  }

  render() {
    return (
    
    <div className='body'>
    
      <div id='title'>
        <header>
          Change Calculator
        </header>
      </div>
    
      <div id='inputInfo'>
        <div id='titleInput'>
          <h2>Enter Information</h2>
        </div>
      
        <div id='inputFields'>
          <label>How much is due?</label>
          <input value={this.state.amountDue} onChange={this.handleInputChange} type ='number'></input>
          <label>How much is received?</label>
          <input value={this.state.amountReceived} onChange={this.handleInputChange} type ='number'></input>
          <button onClick={this.calculate}>Calculate</button>
        </div>
      
        <div id='output-body'>
        
          <div>
            <h3>The total change due is ${this.state.totalChange}</h3>
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
