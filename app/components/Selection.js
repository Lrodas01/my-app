import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../AppContext';

const Selection = ({ titleText, descriptionText, image, selectedImage, onSelect, selected }) => {


  const { cardsData } = useContext(AppContext)

  const [isSelected, setIsSelected] = useState(selected);

  const onPressFunction = () => {
    const newSelected = !isSelected;
    setIsSelected(newSelected);
    onSelect(titleText, newSelected);
  };



  return (
    <Pressable
      style={[styles.box, isSelected && styles.selectedBox, styles.shadowProp, styles.boxContainer]}
      onPress={onPressFunction}
    >
      <Image
        source={isSelected ? selectedImage : image}
        style={styles.image}
      />
      <View>
        <Text style={[styles.titleBox, isSelected && styles.selectedBox]}>{titleText}</Text>
      </View>
      <View>
        <Text style={[styles.descriptionBox, isSelected && styles.selectedBox]}>{descriptionText}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
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
    top: 20,
    width: 154,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Nunito',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  descriptionBox: {
    width: 154,
    height: 32,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Nunito',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  image: {
    width: 16,
    height: 16,
    left: 4,
    top: 6,
    position: 'absolute',
    borderRadius: 3,
    border: '1.50px white solid',
  },
});

export default Selection;
