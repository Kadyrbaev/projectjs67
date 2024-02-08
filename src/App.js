import React from 'react'
import Calcualator from './components/Calcualator'
import { Provider } from 'react-redux'
import { store } from './store'
import Form, { a } from './components/Form'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Calcualator/>
      <Form/>
      </Provider>
    </div>
  )
}

export default App
