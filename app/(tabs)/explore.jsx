import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function explore() {
  return (
    <View style={Styles.mainContainer}>

    </View>
  )
}

function ExploreHeader (){
  return (
    <View style={Styles.header}>
      <Text>Hi, {'userName'}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  mainContainer: {

  },
  header: {

  }
})