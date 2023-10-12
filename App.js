import { StyleSheet, Text, View } from 'react-native';
import { Greet } from './src/components/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native course</Text>
      <Greet firstname="Daniel" lastname="Batres" />
      <Greet />
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
