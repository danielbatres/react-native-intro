import React from 'react';
import { TextInput, Button, Text, View } from 'react-native';

function LoginForm() {
  return (
    <View>
      <TextInput placeholder='Email' />
      <TextInput placeholder='Password' />
      <Button title='Submit' onPress={() => console.log('success')}/>
    </View>
  );
}

export { LoginForm };
