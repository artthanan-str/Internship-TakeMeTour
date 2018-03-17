import React from 'react';
import RequestAJoke from './components/RequestAJoke.js';
import MediaQuery from 'react-responsive';
import './App.css';

const url = 'http://api.icndb.com/jokes/random/';

class App extends React.Component {

  constructor(){
    super();
    this.state = {joke: []};
    this.getJoke = this.getJoke.bind(this);
  }

  getJoke(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstname.value;
    const lastName = e.target.elements.lastname.value;
    const numOfJoke = e.target.elements.numOfJoke.value;

    this.setState({joke:[]});

    console.log(url+numOfJoke+'?firstName='+firstName+'&lastName='+lastName);

    //url+numOfJoke+'/firstname='+firstName+'&amp;lastName='+lastName
  
    fetch(url+numOfJoke+'?firstName='+firstName+'&lastName='+lastName)
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      for (var i=0; i<jsonResult.value.length; i++){
        this.state.joke.slice();
        var str = jsonResult.value[i].joke;
        str = str.replace(/&quot;/g, '"');
        this.setState({joke:[...this.state.joke, str]});
      }
      console.log(this.state);
    })
  }

showOutput(){
  return this.state.joke.map( (item) => 
    <li key={item.toString()}>{item}</li>
    );
  }

  render() {
    return (
      
      <MediaQuery minDeviceWidth={992}>
        <div className='main'>

        <MediaQuery minWidth={300}>
          <div className='title-container'>
            <h1 className='title-text'>Get Some Joke</h1>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={300}>
          <div className='input-container'>
            <RequestAJoke getJoke={this.getJoke}/>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={200}>
            <p className='output-text'>Output</p>
              <div className='output-container'>
               {this.showOutput()}
                <br></br>
              </div>
        </MediaQuery>
        
        </div>
      
      </MediaQuery>
    );
  }
}

export default App;
