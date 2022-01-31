import React, {useEffect, useState} from 'react';
import {getIndex} from '../services/API';
import cn from './Item.module.css';

export default function Item({props}) {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      getIndex(props).then((index) => {
        setData(index);
      });
    } catch (err) {
      console.log(`Something went wrong: ${err}`);
    }
  }, [props]);

  return (
    <div className={cn.container}>
      <div className={cn.name}>{data.name}</div>
      <div className={cn.course}>$100/0.04 ETH</div>
      <div className={cn.containerBottom}>
        <div className={cn.capital}>${data.usdCapitalization}</div>
        <div className={cn.percentr}>{data.percentageChange}%</div>
      </div>
    </div>
  );
}
