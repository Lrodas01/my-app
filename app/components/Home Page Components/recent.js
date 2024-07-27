import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';

const Recent = ({ job, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles.shadowProp]}>
      <Text style={styles.jobTitle}>{job.titleJob}</Text>
      <Image source={job.imageURIJob} style={styles.image} />
    </Pressable>
  );
};

export default Recent;

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    top: 0,
    left: 28,
    width: 130, 
    height: 125, 
    backgroundColor: 'white', 
    borderRadius: 7,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  jobTitle: {
    width: 140, 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 14, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    wordWrap: 'break-word',
    bottom: 43,
  },
    image: {
    position: 'absolute',
    width:  50,
    height: 50,
    top: 42,
    left: 41,
  },
});
