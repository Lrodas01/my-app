import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const Resume6 = ({navigation}) => {
  return (
<View  style = {styles.container}>
    <View style={styles.header}>
    <Pressable onPress={()=>navigation.goBack('')} style = {styles.backButton}>
        <Ionicons name = 'chevron-back-outline' color={'white'} size={50}/>
      </Pressable>
      <Text style = {styles.headerText}>Resume for Dummies</Text>
    </View>
    <View style = {[styles.loadingBarContainer, styles.shadowProp]}>
        <Text style = {styles.loadingBarText}>resume</Text>
        <View style = {styles.loadingBar}>

        </View>
    </View>
    <View style = {{height: 20}}>

    </View>
    <ScrollView contentContainerStyle={{paddingBottom: 200}}>
        <View>
            <Text style = {[styles.titleNumber, {top: 10}]}>6. Save and Submit</Text>
        </View>
        <View>
        <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 26}}>{`\u2022`}</Text>
        <Text style = {styles.description}>Save your resume as a PDF to preserve formatting.</Text>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', top: 80}}>
        <Image style ={{}} source = {require('../../../assets/templates/template8.png')}/>
        </View>
        <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 406}}>{`\u2022`}</Text>
        <Text style = {[styles.description, {top: 125,}]}>Name the file appropriately (e.g., "YourName_Resume.pdf").</Text>
        <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 506}}>{`\u2022`}</Text>
        <Text style = {[styles.description, {top: 175,}]}>Follow the employer’s instructions for submitting your resume, whether it’s through an online application system, email, or in person.</Text>
        
        </View>


    </ScrollView>



    <View style = {[styles.footer, styles.shadowUp]}>
    <Pressable onPress = {() => navigation.navigate('Resume7')} style = {styles.buttonFooter}>
      <Text style = {styles.buttonText}>Next</Text>
      </Pressable>
    </View>
</View>        
  )
}

export default Resume6

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: 'white'
    },
    header:{
        width: 430, 
        height: 82, 
        paddingLeft: 24, 
        paddingRight: 24, 
        paddingTop: 16, 
        paddingBottom: 16, 
        backgroundColor: '#005FEE', 
        borderBottomLeftRadius: 8, 
        borderBottomRightRadius: 8, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 10, 
        display: 'inline-flex'
    },
    backButton:{
      position: 'absolute',
      left: 0,
    },
    headerText:{
        width: 345, 
        color: 'white', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        wordWrap: 'break-word'
    },
    loadingBarContainer:{
        top: 5,
        left: 31,
        width: 370, 
        height: 34, 
        backgroundColor: 'white', 
        borderRadius: 27.50
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      shadowUp:{
        shadowColor: '#171717',
        shadowOffset: { height: -12 },
        shadowOpacity: 0.16,
        shadowRadius: 16,
      },
      loadingBarText:{
        position: 'absolute',
        top: 5,
        left: 159,
        textAlign: 'center', 
        color: 'black', 
        fontSize: 17, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 22, 
        wordWrap: 'break-word'
      },
      loadingBar:{
        width: 25.90, 
        height: 34, 
        backgroundColor: '#005FEE', 
        borderRadius: 25.50
      },
      buttonFooter:{
        width: 384, 
        height: 65, 
        paddingLeft: 24, 
        paddingRight: 24, 
        paddingTop: 16, 
        paddingBottom: 16, 
        backgroundColor: '#005FEE',
        borderRadius: 8, 
        justifyContent: 'center',
         alignItems: 'center', 
         gap: 10, 
         display: 'inline-flex'
      },
      buttonText:{
        textAlign: 'center', 
        color: 'white', 
        fontSize: 24, 
        fontFamily: 'Nunito', 
        fontWeight: '900', 
        wordWrap: 'break-word'
      },
      footer:{
        width: 430, 
        height: 129, 
        paddingTop: 16, 
        paddingBottom: 48, 
        paddingLeft: 24, 
        paddingRight: 24, 
        backgroundColor: 'white', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 10, 
        display: 'inline-flex'
      },
      titleNumber:{
        left: 24,
        top: 14,
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      },
      description:{
        top: 45,
        left: 45,
        width: 400, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 26, 
        wordWrap: 'break-word'
      },
})