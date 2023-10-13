import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate('Settings');
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title='Go to settings' onPress={goToSettings}/>
    </SafeAreaView>
  );
}

export { HomeScreen };