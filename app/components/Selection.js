import { Text, View, StyleSheet, Image, Pressable, ImageBackground, DevSettings } from 'react-native';
import React, { useContext, useState } from 'react';

const Selection = ({ titleText, descriptionText, image, onSelect, selected, jobCardImagr }) => {


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
      <ImageBackground  style = {styles.jobCardImagr} imageStyle={{borderRadius: 8}} source = {jobCardImagr}>

    <View style = {[{height: 112, borderRadius: 8,} ,isSelected && styles.selectedBox]}>
 
      <Image
        source={image}
        style={styles.image}
      />
      <View>
        <Text style={[styles.titleBox, isSelected && styles.selectedBox]}>{titleText}</Text>
      </View>
      <View>
        <Text style={[styles.descriptionBox ,isSelected && styles.shownText, isSelected && styles.selectedBox]}>{descriptionText}</Text>
      </View>
      
    </View>  
      </ImageBackground>
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
  },
  titleBox: {
    paddingTop: 26,
    top: 20,
    left: 10,
    width: 154,
    color: 'white',
    fontSize: 15,
    fontFamily: 'Nunito',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  descriptionBox: {
    top: 20,
    left: 10,
    width: 154,
    height: 0,
    color: 'white',
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
  jobCardImagr:{
    height: 120,
    width: 173,
    bottom: 9.6,
    right: 12,
    borderRadius: 8
  },
  shownText:{
    top: 20,
    height: 32,
    width: 161, 
    color: 'white', 
    fontSize: 12, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    wordWrap: 'break-word'
  },
  opacityBox: {

  }
});

export default Selection;
