import React from 'react'

function header({id}) {
  return (
    <div>
      <div>{id}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default header;
