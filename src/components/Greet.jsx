import React from 'react';
import { Text } from 'react-native';

function Greet(props) {
  // const { firstname = "Daniel", lastname = "Garcia" } = props;
  const { firstname, lastname } = props;

  return (
    <Text>Hello, {firstname} {lastname}</Text>
  );
}

Greet.defaultProps = {
  firstname: "Daniel",
  lastname: "Garcia"
};

export { Greet };