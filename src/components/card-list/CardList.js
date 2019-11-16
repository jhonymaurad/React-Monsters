import React from 'react';
import './card-list.styles.css';
import Card from '../card/Card';

const Cardlist = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return <Card key={monster.id} monster={monster}></Card>;
      })}
    </div>
  );
};

export default Cardlist;
