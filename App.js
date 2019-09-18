import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import AppNavigator from './src/navigation/appNavigator' 
import configureStore from './src/redux/configureStore'

const App = () => {
  const store = configureStore()
    return (
      <Provider store={store}>
        <>
          <AppNavigator />
          <StatusBar hidden={true} />
        </>
      </Provider>
    )
}

export default App
