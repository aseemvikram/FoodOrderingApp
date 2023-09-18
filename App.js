import 'react-native-gesture-handler';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Components/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deals from './src/Components/Deals';
import Account from './src/Components/Account';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Dishes from './src/Components/dishes/Dishes';
import CartScreen from './src/Components/cart/CartScreen';
import { Provider as JotaiProvider } from 'jotai';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator()

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}

export default function App() {

  return (
    <JotaiProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: '#7002',
        headerShown: false,
        tabBarItemStyle: {
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          marginTop: 5,
          paddingTop: 10
        }
      }}>
        <Tab.Screen name='Explore' component={Root}
          options={{
            headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home-sharp" color={color} size={size} />), inactiveBackgroundColor: 'white',
          }} />
        <Tab.Screen name='Dishes' component={Dishes} 
        options={{tabBarIcon: ({ color, size }) => (<Ionicons name="book" color={color} size={size} />)
        }} />
        <Tab.Screen name='Deals' component={Deals} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="pricetag" color={color} size={size} />) }}
        />
        <Tab.Screen name='Cart' component={CartScreen}
         options={{ tabBarIcon: ({ color, size }) => (<View><Ionicons name="card" color={color} size={size} /> 
         </View>) }}
        />
      </Tab.Navigator>


    </NavigationContainer>
    </JotaiProvider>
  );
}
