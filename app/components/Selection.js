import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const Selection = ({ titleText, descriptionText, image }) => {

const [variable, setVariable] = useState(false);
  if (variable == true) {setVariable (false)} else {setVariable (true)}
  
    return (
      <Pressable style = {styles.box}>
          <Text style = {styles.titleBox}>{titleText}</Text>
          <Text style = {styles.descriptionBox}>
            {descriptionText}
          </Text>
          <Image style = {styles.image} source={image} />
          <View style = {styles.sphere} onpress></View>
      </Pressable>
    )
  }


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
    marginLeft: 16,
    marginRight: 292,
    bottom: 9,
    backgroundColor: '#D9D9D9',
    width: 35,
    height: 35,
    borderRadius: '100%',
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