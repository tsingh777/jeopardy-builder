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
    align-items: center;
    height: 16%;
    overflow: hidden;
    min-height: 20px;
`;


export const JeopardyBoardTile: React.FC<{ question: Question, onClick(selection: Question): void }> = ({ question, onClick }) => {
    const [questionSelected, setQuestionSelected] = React.useState<boolean>(false);
    const selectQuestion = () => {
        setQuestionSelected(true);
        onClick(question);
    };

    return (
        <TileContainer onClick={selectQuestion}>
            {questionSelected ? '' : question.value}
        </TileContainer>
    );
}

