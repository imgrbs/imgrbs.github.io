import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Kanit", sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <Root>
        <GlobalStyles />
        <React.Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </Root>
    )
  }
}

export default App
