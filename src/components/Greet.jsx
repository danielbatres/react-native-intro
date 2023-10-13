import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

function Greet(props) {
  const { firstname, lastname } = props;

  return (
    <Text>Hello, {firstname} {lastname}</Text>
  );
}

Greet.defaultProps = {
  firstname: "Daniel",
  lastname: "Garcia"
};

Greet.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string
};

export { Greet };