import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { selectedOptions } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected Options:</Text>
      {selectedOptions.map((option, index) => (
        <Text key={index} style={styles.option}>{option}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DetailsScreen;