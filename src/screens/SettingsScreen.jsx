import { View, Text, Button } from 'react-native'
import React from 'react'

function SettingsScreen(props) {
  const { navigation } = props;
  
  const goToPage = pageName => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button title='Go to home' onPress={() => goToPage('Home')} />
    </View>
  );
}

export { SettingsScreen };
