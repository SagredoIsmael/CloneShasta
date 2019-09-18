import React from "react"
import {createAppContainer} from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'

import DisplayScreen from "../screens/display"

const AppStackNavigator = createStackNavigator({
  Display: {
    screen: DisplayScreen,
    navigationOptions: {
      header: null
    }
  },
})

const AppNavigator = createAppContainer(AppStackNavigator)

export default AppNavigator
