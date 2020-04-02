import React from 'react';
import { Categories, Question } from '../App';
import styled from 'styled-components';
import { Tile } from './tile';

const Board = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
`;

export const GameBoard: React.FC<{ columns: Array<Categories> }> = ({ columns }) => {
    const buildBuild = () => {
        return columns.map((item: Categories) => {
            return (
                <Column>
                    {item.questions.map(tile => { return <Tile question={tile} />; })}
                </Column>
            );
        });
    };
    return (
        <Board className="board">
            {buildBuild()}
        </Board>
    );
}

