import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

 export const TopicContext = createContext({})

const Root = () => {
const topic = useLoaderData()


    return (
        <TopicContext.Provider value = {topic.data}>
            <Header></Header>
            <Outlet></Outlet>
        </TopicContext.Provider>
    );
};

export default Root;