import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='Settings' component={SettingsScreen}/>
    </Drawer.Navigator>
  );
}

export { NavigationDrawer };