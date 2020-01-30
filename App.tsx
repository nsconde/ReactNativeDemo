import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from 'screens/Home';
import DetailCard from 'screens/DetailCard';

const MainNavigator = createStackNavigator({
  Home: {screen: Home, navigationOptions: {title: 'Search'}},
  Profile: {screen: DetailCard, navigationOptions: {title: 'Details'}},
});

const App = createAppContainer(MainNavigator);

export default App;