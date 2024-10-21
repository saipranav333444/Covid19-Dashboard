import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import NotFoundPage from './components/NotFoundPage'

import StateWiseDataPage from './components/StateWiseDataPage'



import About from './components/About'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state/:stateCode" component={StateWiseDataPage} />
    <Route exact path="/about" component={About} />
  
    <Route component={NotFoundPage} />
  </Switch>
)

export default App
