import { Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'

const Selection = ({ titleText, descriptionText, image }) => {
  
    return (
    <View style = {styles.container}>
        <View style = {styles.box}>
            <Text style = {styles.titleBox}>{titleText}</Text>
            <Text style = {styles.descriptionBox}>
              {descriptionText}
            </Text>
            <Image style = {styles.image} source={require({image})} />
            <View style = {styles.sphere} onpress></View>
            
        </View>
    </View>
    )
  }


const styles = StyleSheet.create ({

  container: {
    fontFamily: 'Nunito',
  },

  box: {    
    maxWidth: 343,
    height: 150,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 40,
    padding: 1,
    top: 193,
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
    width: 148,
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
    width: 120,
    height: 120,
  },
});

export default Selection