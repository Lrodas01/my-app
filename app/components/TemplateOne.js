import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';

const Template = ({ template, onSelect, isSelected }) => {
  return (
    <Pressable onPress={() => onSelect(template)}>
      <Image
        source={template.source}
        style={[styles.image, isSelected && styles.selectedImage]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 10,
    height: 258,
    width: 182,
    borderWidth: 5,
    borderColor: 'transparent',
  },
  selectedImage: {
    borderColor: '#005FEE',
  },
});

export default Template;
