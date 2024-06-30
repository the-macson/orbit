import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import SearchScreen from '../screen/Search';
import Dummy from '../screen/Dummy';
import AntIcon from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntIcon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntIcon name="search1" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={Dummy}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntIcon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Community"
        component={Dummy}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntIcon name="addusergroup" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Dummy}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntIcon name="setting" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;