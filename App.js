import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import CharacterListScreen from './src/screens/CharacterListScreen'
import CharacterScreen from './src/screens/CharacterScreen'
import HQListScreen from './src/screens/HQListScreen'
import HQScreen from './src/screens/HQScreen'
import MovieListScreen from './src/screens/MovieListScreen'
import MovieScreen from './src/screens/MovieScreen'

const characterStack = createStackNavigator({
  CharacterList: CharacterListScreen,
  CharacterScreen: CharacterScreen
})

const hqStack = createStackNavigator({
  HQList: HQListScreen,
  HQScreen: HQScreen
})

const movieStack = createStackNavigator({
  MovieList: MovieListScreen,
  MovieScreen: MovieScreen
})

const appNavigator = createBottomTabNavigator({
  Character: characterStack,
  HQ: hqStack,
  Movie: movieStack
})

const App = createAppContainer(appNavigator)

export default App;
