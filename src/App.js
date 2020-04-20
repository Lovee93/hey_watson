import React, { Component } from 'react';
import './App.css';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class App extends Component{
  
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  onListenClick(){
    fetch('https://nameless-fortress-57383.herokuapp.com/api/speech-to-text/token')
      .then(function(response) {
        return response.json();
      }).then((token) => {

    var stream = recognizeMic(Object.assign(token, {
        objectMode: true, // send objects instead of text
        format: false // optional - performs basic formatting on the results such as capitals an periods
    }));
    
    stream.on('data', (data) => {
      this.setState({
        text: data.results[0].alternatives[0].transcript
      })
    });

    stream.on('error', function(err) {
        console.log(err);
    });

    document.querySelector('#stop').onclick = stream.stop.bind(stream);

    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wanna Speak?</h1>
          <button onClick={this.onListenClick.bind(this)} className="goForItButton">Go for it!</button>
          <h3>{this.state.text}</h3>
        </header>
      </div>
    );
  }
}

export default App;
