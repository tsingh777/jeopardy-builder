import React from 'react';
import { Question } from '../App';
import styled from 'styled-components';

const Container = styled.div`
    padding: 12px;
    
    color: #ddd;
    background: linear-gradient(to top left, #000088, #0000ff);
    
    border-color: #ddd;
    border: solid 1px;
    border-radius: 10px;
    
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 50vh;
    width: 50vw;
`;


export const QuestionCard: React.FC<{ question?: Question, onClick(): void }> = ({ question, onClick }) => {
    const [answerShown, setShown] = React.useState<boolean>(false);
    const showAnswer = () => {
        setShown(true);
    };
    const dismiss = () => {
        setShown(false);
        onClick();
    };
    return (question ?
        <Container onClick={answerShown ? dismiss : showAnswer}>
            {answerShown ? question.a : question.q}
        </Container> : null
    );
}

