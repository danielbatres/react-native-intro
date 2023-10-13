import { View, Text, Button } from 'react-native'
import React from 'react'

function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate('Settings');
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title='Go to settings' onPress={goToSettings}/>
    </View>
  );
}

export { HomeScreen };