import React from 'react';

const Backstory = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '90%',
    }}
  >
    <ul>
      <li>Started as a standard React project</li>
      <li>Rebuilt using Gatsby and MDX</li>
      <li>Other teams at IBM wanted in</li>
    </ul>
  </div>
);

export default Backstory;
