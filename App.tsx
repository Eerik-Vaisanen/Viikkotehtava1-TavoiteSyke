import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState({ lower: 0, upper: 0 });

  function calculate() {
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0) {
      // Tarkistaa, onko annettu arvo numero vai ei
      return;
    }

    const lowerResult = (220 - ageNumber) * 0.65;
    const upperResult = (220 - ageNumber) * 0.85;

    setLimits({ lower: lowerResult.toFixed(2), upper: upperResult.toFixed(2) });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <View style={styles.rateContainer}>
        <Text style={styles.field}>Limits</Text>
        <Text style={styles.field}>{`${limits.lower} - ${limits.upper}`}</Text>
      </View>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
  rateContainer: {
    marginBottom: 10,
  },
});
