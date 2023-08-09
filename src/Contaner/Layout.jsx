import React from 'react'

import Header from './Header'

import Routers from "../Routes/Routers"
const Layout = () => {
  return (
    <div>
      <Header/>

      <div>
        <Routers/>
      </div>
    </div>
    

  )
}

export default Layout
