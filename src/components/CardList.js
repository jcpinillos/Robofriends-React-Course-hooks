import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        if (true) {
            throw new Error('Testing boundary');
        }
        return (
            <Card
                key={i}
                id={user.id}
                name={user.name}
                email={user.email}
            />
        );
    });
    return <div>{cardComponent}</div>;
};

export default CardList;
