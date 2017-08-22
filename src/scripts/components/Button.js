import React, { Component } from 'react';

export default ({ className, text, handleClick }) => (
  <button className={['button'].concat(className).join(' ')} onClick={handleClick}>{text}</button>
);
