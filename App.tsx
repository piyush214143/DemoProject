import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/LoginScreen';
import OTPScreen from './src/OTPScreen';
import UploadPostScreen from './src/UploadPostScreen'; // Create this file
import PreviousScreen from './src/PreviousScreen'; // Create this file
import { View , Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const MainTabs = () => {
  return (
       <Tab.Navigator
      screenOptions={{
        headerShown: false,
    
        tabBarStyle: {
          backgroundColor: '#22225c',
          borderTopEndRadius:10,
          borderTopStartRadius:12,
         
        },
        tabBarActiveTintColor: '#fff',
        // tabBarActiveBackgroundColor: "#fff"
      }}>
          <Tab.Screen
        name="UploadPost"
        component={UploadPostScreen}
        options={{
          headerShown: false,
       
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View>
              <Image
                style={{
                  width: size,
                  height: size,
                }}
                // source={require("../../assets/images/Home.png")}
                source={require("./src/assets/images/uploadPost.png")}
              />
            </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Previous"
        component={PreviousScreen}
        options={{
          headerShown: false,
       
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View>
              <Image
                style={{
                  width: size,
                  height: size,
                }}
                // source={require("../../assets/images/Home.png")}
                source={require("./src/assets/images/previouspost.png")}
              />
            </View>
            );
          },
        }}
      />
      {/* <Tab.Screen name="UploadPost" component={UploadPostScreen} options={{ title: 'Upload Post' }} /> */}
      {/* <Tab.Screen name="Previous" component={PreviousScreen} options={{ title: 'Previous' }} /> */}
    </Tab.Navigator>
  );
};

// Main Stack Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
