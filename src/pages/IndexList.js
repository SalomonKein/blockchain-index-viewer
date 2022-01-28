import React, {useEffect, useState} from 'react';
import IndexBlock from '../components/IndexBlock';
import {getGroup, getGroupIds} from '../services/API';

export default function IndexList() {
  const [group, setGroup] = useState([]);

  useEffect(() => {
      let res = []
    getGroupIds()
    .then((data) => {        
      data.forEach((id) =>     
        getGroup(id).then((data) => {            
        res.push(data)
        setGroup(res);
        })
    );
    });
  }, []);

  console.log(group, 'group');

  return (
    <div>
      {group.map((elem) => <IndexBlock props={elem} key={Date.now() * Math.random()} />)}
    </div>
  );
}
