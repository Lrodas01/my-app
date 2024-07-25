import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Selection = ({ titleText, descriptionText, image, onSelect, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const onPressFunction = () => {
    const newSelected = !isSelected;
    setIsSelected(newSelected);
    onSelect(titleText, newSelected);
  };

  return (
    <Pressable style={[styles.box, isSelected && styles.selectedBox, styles.shadowProp, styles.boxContainer]} onPress={onPressFunction}>
        <View>
          <Text style={[styles.titleBox, isSelected && styles.selectedBox]}>{titleText}</Text>
        </View>
        <View>
          <Text style={[styles.descriptionBox, isSelected && styles.selectedBox]}>{descriptionText}</Text>
        </View>
      <Image style={styles.image} source={image} />
      {/* {isSelected ? (
        <Ionicons style={styles.sphere} name="checkmark-circle" size={0} color="black" />
      ) : (
        <Ionicons style={styles.sphere} name="checkmark-circle-outline" size={0} color="black" />
      )} */}
    </Pressable>
  );
};


const styles = StyleSheet.create ({
  boxContainer:{
    borderWidth: 1,
    borderColor: 'white',
  },
  box: {  
    marginHorizontal: 14,
    width: 170, 
    height: 112, 
    padding: 8, 
    backgroundColor: 'white', 
    borderRadius: 8, 
    border: '1px solid', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    gap: 24, 
    display: 'inline-flex',
    marginBottom: 19,
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  selectedBox: {
    backgroundColor: '#005FEE',
    color: 'white',
  },
titleBox: {
  paddingTop: 26,
  width: 154, 
  color: 'black', 
  fontSize: 15, 
  fontFamily: 'Nunito', 
  fontWeight: '700', 
  wordWrap: 'break-word'
},

descriptionBox: {
  width: 154, 
  height: 32, 
  color: 'black', 
  fontSize: 12, 
  fontFamily: 'Nunito', 
  fontWeight: '400', 
  wordWrap: 'break-word'
  },

  image: {
  width: 16, 
  height: 16, 
  left: 4, 
  top: 6, 
  position: 'absolute', 
  borderRadius: 3, 
  border: '1.50px white solid'
  },
});

export default Selection