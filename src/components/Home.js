import React from 'react';
import Calender from './Calender';
import CompletedTask from './CompletedTask';
import Header from './Header';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div>
            <Header />

            <ToDo />
            <CompletedTask />
            <Calender />
        </div>
    );
};

export default Home;