import React from "react"
import { Router } from "@reach/router" 
import PrivateRoute from "../components/PrivateRoute" 
import Dashboard from "./dashboard"
import Layout from "../layouts/layout"
import Login from "./login" 

const App = () => (
  <Layout>  
    <Router> 
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <Login path="/app/login" /> 
    </Router>
  </Layout>
)

export default App