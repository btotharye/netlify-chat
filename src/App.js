import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import steps from './config/steps';
import chat_styles from './config/chatstyles'
import logo from './assets/images/logo.png'
import './assets/css/main.css';
import './assets/css/bootstrap-grid.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
        </header>
        <div className="container content">
          <div className="row justify-content-md-center">
            <div className="col">
              <ThemeProvider theme={chat_styles}>
                <ChatBot
                  steps={steps}
                  headerTitle="Mycroft Helper"
                  placeholder="Type away..."
                  customDelay="500"
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
