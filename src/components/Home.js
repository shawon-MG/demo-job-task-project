import React from 'react';
import Calender from './Calender';
import CompletedTask from './CompletedTask';
import Header from './Header';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div>
            <Header />

            <CompletedTask />
            <ToDo />
            <Calender />
        </div>
    );
};

export default Home;