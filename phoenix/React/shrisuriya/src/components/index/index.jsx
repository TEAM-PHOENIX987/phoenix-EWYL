import React from 'react'

import Header from '../Header'

import SubHeader from '../SubHeader/SubHeader'

import Button from '../Footer/Button'

import Image from '../Image/Image'

import './index.css'

const HelloWorld = function () {
  let Error="404 Error";
  return (
    <div class="container">
      <Header Head={Error}/>
      <SubHeader />
      <Image />
      <Button />
    </div>

  )
}

export default HelloWorld