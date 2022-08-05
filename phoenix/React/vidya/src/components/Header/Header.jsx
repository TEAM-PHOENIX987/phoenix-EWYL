import React from 'react'
import Body from '../Body/body';
import Content from '../Content/Content';
import './Header.css';

function Header() {
  const fest="  AI FEST";
  return (
  <div>
    <div class="style">Hello Everyone</div>
    <Body/>
    <Content con={fest}/>
  </div>

  )
}

export default Header;