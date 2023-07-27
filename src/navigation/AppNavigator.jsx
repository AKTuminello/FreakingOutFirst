import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UploadFileScreen from './screens/UploadFileScreen';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} /> //<---this is where you stopped
      <Tab.Screen name="Upload" component={UploadFileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
