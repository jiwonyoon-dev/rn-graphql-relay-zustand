import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCounterStore } from '../stores/counterStore';

const TestCounterScreen = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>🧮 Count: {count}</Text>
      <Button title="➕ Increment" onPress={increment} />
      <Button title="➖ Decrement" onPress={decrement} />
      <Button title="🔁 Reset" onPress={reset} />
    </View>
  );
};

export default TestCounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  },
});
