import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ErrorMessage, Forget, Login, Message, Reset, Signup, Welcome } from './screens';
import Tabs from './navigation/Tab';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { CustomDrawer } from './components';
import * as Icon from "@expo/vector-icons";
import { Colors, Layout } from './constants';

const DrawerStack = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={Store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Welcome" screenOptions = {{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="ErrorMessage" component={ErrorMessage} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="Reset" component={Reset} />
          <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MyStack} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
);

const MyStack= () => {
 
    return (
        <DrawerStack.Navigator initialRouteName="Main" 
         drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: Colors.light.primary,
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
        }}>
        <DrawerStack.Screen
          name="Main"
          component={Tabs}
          options={{
            drawerIcon: ({color}) => (
              <Icon.Ionicons
                color={Colors.dark.text}
                size={Layout.base*1.4}
                name={"home"}
            />
            ),
          }}
        />
        </DrawerStack.Navigator>
  )  
};

export default App;
