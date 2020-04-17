import React from 'react';
import { Categories, Question } from '../App';
import styled from 'styled-components';
import { JeopardyBoardTile } from './tile';
import { QuestionCard } from './question';

const PageLayout = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Board = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 100px;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
`;
const Header = styled.div`
    text-transform: uppercase;
    text-align: center;
    margin-top: 8px;
    height: 80px;
`;

export const GameBoard: React.FC<{ columns: Array<Categories> }> = ({ columns }) => {
    const [showQuestion, setshowQuestion] = React.useState<boolean>(true);
    const [currentQuestion, setCurrentQuestion] = React.useState<Question | undefined>(undefined);
    const hideQuestion = () => {
        setshowQuestion(false);
        setCurrentQuestion(undefined);
    };
    const selectQuestion = (selection: Question) => {
        setshowQuestion(true);
        setCurrentQuestion(selection);
    };

    const buildBuild = () => {
        return columns.map((item: Categories, index) => {
            return (
                <Column key={`${item.key}-${index}-col`}>
                    <Header>{item.key}</Header>
                    {item.questions.map((tile: Question, index) => {
                        return (
                            <JeopardyBoardTile
                                key={`${item.key}-${tile.q}-${tile.a}-${index}`}
                                question={{ ...tile, value: tile.value ? tile.value : ((index + 1) * 100) }}
                                onClick={selectQuestion}
                            />
                        );
                    })}
                </Column>
            );
        });
    };
    return (
        <PageLayout>
            <Board className="board">
                {buildBuild()}
                {showQuestion && <QuestionCard onClick={hideQuestion} question={currentQuestion} />}
            </Board>
        </PageLayout>
    );
}

