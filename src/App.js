import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'

const font = `
  @font-face {
    font-family: "Kanit";
    src: url('/fonts/Kanit-ExtraLight.ttf'),
      url('/fonts/Kanit-ExtraLightItalic.ttf'),
      url('/fonts/Kanit-Light.ttf'),
      url('/fonts/Kanit-LightItalic.ttf');
  }
`

const GlobalStyles = createGlobalStyle`
  ${font}
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
