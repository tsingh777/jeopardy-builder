import React from 'react';
import { Question } from '../App';
import styled from 'styled-components';

const TileContainer = styled.div`
    padding: 12px;
    
    color: #ddd;
    background: linear-gradient(to top left, #000088, #0000ff);
    
    border-color: #ddd;
    border: solid 1px;
    border-radius: 10px;
    
    display:flex;
    justify-content: center;
`;

export const Tile: React.FC<{ question: Question }> = ({ question: { q, a, value } }) => {
    const [answerShown, setShown] = React.useState(Boolean);
    const clickCard = () => {
        setShown(!answerShown);
    };
    return (
        <TileContainer onClick={clickCard}>
            {answerShown ? a : q }
        </TileContainer>
    );
}

