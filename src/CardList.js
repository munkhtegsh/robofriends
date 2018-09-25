import React from 'react';
import Card from "./Card";
import {robots} from './robots';

const CardList = ({searchfield}) => {
    let filtered = robots.reduce((acc, curr) => {
        if (curr.username.toLowerCase().includes(searchfield)) {
            acc.push(curr);
        }

        return acc;
    }, [])

    const robofriends = filtered.map((robot, i) => (
        <Card key={i} name={robot.name} username={robot.username} email={robot.email}/>
    ));

    return (
        <div>
           {robofriends} 
        </div>
    );
}

export default CardList;

