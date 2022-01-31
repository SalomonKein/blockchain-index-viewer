import React from 'react';
import Item from './Item';
import cn from './IndexBlock.module.css';

export default function IndexBlock({props}) {
  return (
    <div>
      <p className={cn.title}>{props.name}</p>
      <div className={cn.container}>
        {props.indexes.map((idx) => (
          <Item props={idx} key={Date.now() * Math.random()} />
        ))}
      </div>
    </div>
  );
}
