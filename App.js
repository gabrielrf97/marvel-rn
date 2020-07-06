import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import CharacterListScreen from './src/screens/CharacterListScreen'
import CharacterScreen from './src/screens/CharacterScreen'
import HQListScreen from './src/screens/HQListScreen'
import HQScreen from './src/screens/HQScreen'
import SerieListScreen from './src/screens/SerieListScreen'
import SerieScreen from './src/screens/SerieScreen'

const characterStack = createStackNavigator({
  CharacterList: CharacterListScreen,
  CharacterScreen: CharacterScreen
})

const hqStack = createStackNavigator({
  HQList: HQListScreen,
  HQScreen: HQScreen
})

const serieStack = createStackNavigator({
  SerieList: SerieListScreen,
  SerieScreen: SerieScreen
})

const appNavigator = createBottomTabNavigator({
  Character: characterStack,
  HQ: hqStack,
  Serie: serieStack
})

const App = createAppContainer(appNavigator)

export default App;
