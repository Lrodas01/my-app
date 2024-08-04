import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from '../components/Home Page Components/footer'

const Internships = ({route, navigation}) => {

const { intern } = route.params

  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}>{intern.name}</Text>
        </View>
        <View>
            <Text style = {styles.description}>{intern.description}</Text>
        </View>
        <View style = {styles.infoContainer}>
            <View>
            <Text style = {styles.infoTitle}>More Information</Text>
            </View>
            <View>
            <Text style = {styles.infoHeader}>{intern.name} contact information</Text>
            </View>
            <View>
            <Text style = {styles.email}>{intern.email}</Text>
            </View>
            <View>
            <Text style = {styles.web}>{intern.web}</Text>
            </View>
            <View>
            <Text style = {styles.address}>{intern.address}</Text>
            </View>
        </View>
        <View style = {styles.imageContainer}>
            <Image style = {styles.image} source = {require('../../assets/images/icon.png')}/>
        </View>


        <Footer navigation={navigation}/>
    </View>
  )
}

export default Internships

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
    headerText:{
        width: 345, 
        color: 'white', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        wordWrap: 'break-word'
    },
    description:{
        top: 19,
        left: 24,
        width: 389, 
        height: 180, 
        color: '#808080', 
        fontSize: 20, 
        fontFamily: 'Nunito', 
        fontWeight: '500', 
        lineHeight: 30, 
        wordWrap: 'break-word'
    },
    infoContainer:{
        top: 44,
        width: 430, 
        height: 184, 
        backgroundColor: 'black'
    },
    infoTitle:{
        top: 3,
        textAlign: 'center', 
        color: 'white', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        wordWrap: 'break-word'
    },
    infoHeader:{
        top: 40,
        left: 24,
        width: 199, 
        height: 19, 
        color: 'white', 
        fontSize: 14, 
        fontFamily: 'Nunito', 
        fontWeight: '400', 
        wordWrap: 'break-word'
    },
    email:{
        width: 130, 
        top: 59,
        left: 24,
        height: 20, 
        color: 'white', 
        fontSize: 14, 
        fontFamily: 'Nunito', 
        fontWeight: '400', 
        textDecoration: 'underline', 
        wordWrap: 'break-word'
    },
    web:{
        top: 74,
        left: 24,
        color: 'white', 
        fontSize: 14, 
        fontFamily: 'Nunito', 
        fontWeight: '400',
        wordWrap: 'break-word'
    },
    address:{
        top: 16,
        textAlign: 'right', 
        color: 'white', 
        fontSize: 14, 
        fontFamily: 'Nunito', 
        fontWeight: '400', 
        lineHeight: 36, 
        wordWrap: 'break-word'
    }
})