import React from 'react'

import Head from '../Header'

import SubHeader from '../SubHeader/SubHeader'

import Button from '../Footer/Button'

import Image from '../Image/Image'

import './index.css'

const HelloWorld = function () {
  return (
    <div class="container">
      <Head />
      <SubHeader />
      <Image />
      <Button />
    </div>

  )
}

export default HelloWorld