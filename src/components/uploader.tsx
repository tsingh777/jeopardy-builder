import React from 'react';
import styled from 'styled-components';
import { GameBoard } from './gameboard';
import { Categories } from '../App';

const Layout = styled.div`
    padding: 25px;
`;

export const GameUploader: React.FC = () => {
    const [data, setData] = React.useState<Array<Categories>>([]);

    const onReaderLoad = (event) => {
        if (event && event.target && event.target.result) {
            setData(JSON.parse(event.target.result));
        }
    };
    const handleInput = (event) => {
        const reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    };
    const noData = !data || (data && data.length === 0);

    if (!noData) {
        return (
            <GameBoard columns={data} />
        );
    }

    return (
        <Layout>
            <h1>Welcome to my trivia maker</h1>
            <input type="file" accept=".json" onChange={handleInput} />
        </Layout>
    );
}

