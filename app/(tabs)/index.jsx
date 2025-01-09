import { useUser } from '@clerk/clerk-expo'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Page() {
  return (
    <View>
      <HomeHeader/>
    </View>
  )
}

function HomeHeader (){
  const {userId} = useUser()

  return (
    <View style={HeaderStyles.container}>
      <View>
        <FontAwesome6 name="hand" size={24} color="black" />
        <Text>Hello, {userId}</Text>
      </View>
    </View>
  )
}

const HeaderStyles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})