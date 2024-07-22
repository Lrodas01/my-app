import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Selection = ({ titleText, descriptionText, image, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const onPressFunction = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onSelect(titleText, newSelected);
  };

  return (
    <Pressable style={styles.box} onPress={onPressFunction}>
      <Text style={styles.titleBox}>{titleText}</Text>
      <Text style={styles.descriptionBox}>{descriptionText}</Text>
      <Image style={styles.image} source={image} />
      {selected ? (
        <Ionicons style={styles.sphere} name="checkmark-circle" size={35} color="black" />
      ) : (
        <Ionicons style={styles.sphere} name="checkmark-circle-outline" size={35} color="black" />
      )}
    </Pressable>
  );
};


const styles = StyleSheet.create ({

  box: {  
    fontFamily: 'Nunito',  
    maxWidth: 343,
    height: 150,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 40,
    padding: 1,
    top: 0,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 7,

  },

titleBox: {
  width: 150,
  height: 41,
  fontSize: 30,
  fontWeight: 600,
  left: 13,
},

descriptionBox: {
    width: 128,
    height: 41,
    fontSize: 14,
    fontWeight: 400,
    left: 13,
    marginBottom: 20,
    marginTop: 13,
    marginLeft: 38,
  },

  sphere: {
    left: 10,
    bottom: 9,
  },

  image: {
    // left: 200,
    // bottom: 100,
    position: 'absolute',
    top: 14,
    right: 10,
    width: 100,
    height: 120,
  },
});

export default Selection