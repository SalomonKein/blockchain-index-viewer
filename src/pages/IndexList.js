import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../App';
import IndexBlock from '../components/IndexBlock';

export default function IndexList() {
  const [groups, setGroup] = useState([]);
  const {group} = useContext(Context);

  useEffect(() => {
    setGroup(group);
  }, [group]);

  return (
    <div>
      {groups.map((elem) => (
        <IndexBlock props={elem} key={Date.now() * Math.random()} />
      ))}
    </div>
  );
}
