import React from 'react';

const Card = ({name, username, email}) => (
  <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
    <h2>{username}</h2>
    <img src="https://robohash.org/test?200x200" alt="robots" />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;