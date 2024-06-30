import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {normalizeFont} from '../constants/normalizeLayout';
const Dummy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dummy Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: normalizeFont(20),
    fontWeight: 'bold',
  },
});

export default Dummy;
