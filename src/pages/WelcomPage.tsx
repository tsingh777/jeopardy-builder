import React from 'react';
import styled from 'styled-components';
import {
    Link,
} from "react-router-dom";

const Layout = styled.div`
    padding: 25px;
`;

export const WelcomePage: React.FC = () => {
    return (
        <Layout>
            <h1>Welcome to my trivia maker</h1>
            <p>Play <Link to="/heros">superheros</Link></p>
            <Link to="/custom">Upload</Link>
        </Layout>
    );
}

