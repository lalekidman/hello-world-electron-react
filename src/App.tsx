import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { shell } from 'electron';
import icon from '../assets/icon.svg';

const MainContainer = () => {
  const openFile = () => {
    shell.openPath(`${__dirname}/../helloworld.txt`);
  };
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Open Hello World.txt</h1>
      <div className="Hello">
        <button type="button" onClick={openFile}>
          Open File
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainContainer} />
      </Switch>
    </Router>
  );
}
