import React from 'react'
import Header from './containers/Header'
import ProductListening from './containers/ProductListening'
import ProductDetail from "./containers/ProductDetailes"

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
         <Header/>
         <Switch>

         <Route path='/' exact Component={ProductListening} />
         <Route path='/product/:productId' exact Component={ProductDetail} />
         <Route>404 Not Found</Route>

         </Switch>
      </Router>
 
    </div>
  )
}

export default App
