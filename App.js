import { StyleSheet, Text, View } from 'react-native';
import { Greet } from './src/components/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native course</Text>
      <Greet name="Daniel Batres" />
      <Greet name="Agustin Navarro" />
      <Greet name="Carlos Jose" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
