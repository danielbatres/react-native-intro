import React from 'react';
import { Text } from 'react-native';

function Greet({ name }) {
  return (
    <Text>Hello, {name}</Text>
  );
}

export { Greet };