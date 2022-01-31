import React from 'react';
import cn from './Header.module.css';

export default function Header() {
  return (
    <div className={cn.container}>
      <div className={cn.containerHead}>
        <div className={cn.logotype}>Logotype</div>
        <button
          className={cn.btnConnect}
          onClick={() => alert('you pressed the button')}
        >
          Connect vallet
        </button>
      </div>
      <p className={cn.text}>All Indeces</p>
    </div>
  );
}
