import React from 'react';
import './App.css';
import { GameBoard } from './components/gameboard';
import styled from 'styled-components';
import SuperHeroData from './games/superHeros1.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { WelcomePage } from './pages/WelcomPage';
import { GameUploader } from './components/uploader';

export interface Question {
  q: String
  a: String
  value?: Number
}
export interface Categories {
  key: String
  questions: Array<Question>
}


export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/heros">
            <GameBoard columns={SuperHeroData} />
          </Route>
          <Route path="/custom">
            <GameUploader />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

