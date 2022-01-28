import React, {useEffect, useState} from 'react';
import Item from './Item';
import cn from './IndexBlock.module.css';
import {getIndex} from '../services/API';

export default function IndexBlock({props}) {
  console.log(props.indexes, 'props from block');
  const [index, setIndex] = useState([]);

  useEffect(() => {
    let res = [];
    props.indexes.map((idx) =>
      getIndex(idx).then((data) => {
        res.push(data);
        setIndex(res);
      })
    );
  }, [props.indexes]);

  console.log(index, 'index');

  return (
    <div>
      <p className={cn.title}>{props.name}</p>
      <div className={cn.container}>
        {index.map((item) => (
          <Item props={item} key={Date.now() * Math.random()} />
        ))}
      </div>
    </div>
  );
}
