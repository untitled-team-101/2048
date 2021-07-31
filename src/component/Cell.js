"use strict"
import React from 'react';

function Cell({index}) {
  return (
    <div className={"cell"}>{index}</div>
  );
}

export default Cell;