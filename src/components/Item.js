import React from 'react';
import cn from './Item.module.css'


export default function Item({props}) {


console.log(props, 'props from item');
  

  return  (

  <div className={cn.container}>
    <div className={cn.name}>{props.name}</div>
    <div className={cn.course}>$100/0.04 ETH</div>
    <div className={cn.containerBottom}>
    <div className={cn.capital}>${props.usdCapitalization}</div>
    <div className={cn.percentr}>{props.percentageChange}%</div>
    </div>
  </div>

  );
}
