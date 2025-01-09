import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '../../constants/Colors';
import { useUser, useAuth } from '@clerk/clerk-expo';

export default function TabLayout() {

  const { user } = useUser();
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    console.log("going to /auth from (tabs)/layout")
    return <Redirect href="/auth" />;
  }

  if (isSignedIn && user?.unsafeMetadata?.onboarding_completed !== true) {
    console.log("going to auth/complete-y-a from (tabs)/layout")
    return <Redirect href="/auth/complete-your-account" />;
  }

  return (
    <Tabs screenOptions={{
      headerShown: false, 
      tabBarActiveTintColor: Colors.LIGHT_BLUE, 
      tabBarInactiveTintColor: Colors.NORMAL_BLUE,
      }}>
      <Tabs.Screen name='index' options={{
        title: "Home",
        // tabBarLabel: "Home",
        tabBarIcon: ({color})=> <AntDesign name="home" size={24} color={color} />
        }}/>
      <Tabs.Screen name='profile' options={{
        title: "Profile",
        // tabBarLabel: "Profile",
        tabBarIcon: ({color})=> <FontAwesome name="user-o" size={24} color={color} />
        }}/>
      <Tabs.Screen name='explore' options={{
        title: "Explore",
        // tabBarLabel: "Explore",
        tabBarIcon: ({color})=> <MaterialIcons name="travel-explore" size={24} color={color} />
        }}/>
    </Tabs>
  )
}