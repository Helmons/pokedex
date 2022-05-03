import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Favorites } from '../screens/Favorites';
import { Home } from '../screens/Home';
import theme from '../styles/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createMaterialBottomTabNavigator()

export function AppTabRoutes() {
  return (
    <Navigator
      initialRouteName='Home'
      labeled={false}
      inactiveColor={theme.colors.text_color}
      activeColor={theme.colors.border_color}
      keyboardHidesNavigationBar={false}
      barStyle={{
        backgroundColor: theme.colors.background_primary,
        position: 'absolute',
        borderTopWidth: 1,
        borderTopColor: theme.colors.background_secondary,
        overflow: 'hidden',
        height: 50,
        shadowOffset: {
          width: 10,
          height: 10
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home-outline" color={color} size={20} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-sharp" color={color} size={20} />
          ),
        }}
      />
    </Navigator>
  );
}