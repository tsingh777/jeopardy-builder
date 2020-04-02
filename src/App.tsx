import React from 'react';
import './App.css';
import { GameBoard } from './components/gameboard';
import styled from 'styled-components';
import data from './games/marvel1.json'

const PageLayout = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
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
    <PageLayout>
      <GameBoard columns={data} />
    </PageLayout>
  );
}

