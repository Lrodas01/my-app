import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {router} from 'expo-router'

const missing = ( {navigation} ) => {
  return (
    <View>
        <Pressable style = {styles.buttonContainer} onPress={() => navigation.replace('../Pages/welcome')}>
            <Text style = {styles.textButton}>This page is to test, press to go back</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create ({

});
export default missing