import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../constants';
import { Main, Provider, Providers, ProviderDetails, Report } from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route })=>({
                headerShown: false,
                tabBarIcon: ({focused, color, size})=>{
                    let iconName;
                    if(route.name == 'Main'){
                        iconName = focused ? "ios-home" : "ios-home";
                        return <Ionicons style={{paddingBottom: 30}} name={iconName} color={color} size={size*1.2} />
                    }
                },
                initialRouteName: "Main",
                tabBarInactiveTintColor:Colors.light.text,
                tabBarActiveTintColor: Colors.light.text,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor:Colors.grey,
                    height: 75,
                    width: '100%',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 0
                }
            })}
        >
            <Tab.Screen name="Main2" component={Main}  options={{ headerShown: false }} />
            <Tab.Screen name="Providers" component={Providers}  options={{ headerShown: false }} />
            <Tab.Screen name="Provider" component={Provider}  options={{ headerShown: false }} />
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen  name="Report" component={Report}  options={{ headerShown: false }} />
            <Tab.Screen name="ProviderDetails" component={ProviderDetails}  options={{ headerShown: false }} />
            <Tab.Screen name="Main3" component={Main}  options={{ headerShown: false }} />
            
        </Tab.Navigator>
    )
};

export default Tabs;
