import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Home from './containers/Home';
import Settings from './containers/Settings';
import HomeComponent from './modules/home/containers/home.container';

const App = createBottomTabNavigator({
  HomeComponent: {
    screen: HomeComponent,
  },
  Settings: {
    screen: Settings,
  },
},
{
  initialRouteName: 'HomeComponent',
});

export default App;
