import React, { Fragment } from 'react';
import Clock from './Clock';
import './index.scss';

const Cap = () => (
  <Fragment>
    <header className="header">
      <h1>It works! ;)</h1>
    </header>
    <div className="lecture-cap">
      <div className="pre-title">PLLUG lecture #3</div>
      <div className="title">Redux & React. Part 1.</div>
      <Clock intervalMS={1000} to={1552321800000} />
    </div>
  </Fragment>
);

export default Cap;
