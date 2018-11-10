import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflow: 'scroll', border: '5x solid black', height: '500px'}}>
      {props.children}
    </div>
  )
}

export default Scroll;
