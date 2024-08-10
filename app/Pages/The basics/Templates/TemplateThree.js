import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Artificial from '../../../components/Artificial'

const TemplateThree = ({navigation}) => {

    const [showComponent, setShowComponent] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setShowComponent(true)
        }, 3000)
    }, [])


  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style = {styles.headerText}>The Basics</Text>
            <Pressable style = {styles.doneButton} onPress = {() => navigation.navigate('Congrats')}>
                <Text style = {styles.doneButtonText}>done</Text>
            </Pressable>

            </View>
        </View>    

    <ScrollView contentContainerStyle= {{paddingBottom: 0}}>
        <View>
            <Text style = {styles.titleText}>This template is design to help you know the basics of making a resume!</Text>
        </View>
        <Image style = {styles.image} source={require('../../../../assets/templates/template3.png')}/>

        <TextInput placeholder='Your Name Here' style = {styles.nameInput}/>
        <TextInput placeholder='Address Here' style = {styles.addressInput}/>
        <TextInput placeholder='Phone# Here' style = {styles.contactInput}/>
        <TextInput placeholder='Email Here' style = {styles.emailInput}/>
        <TextInput placeholder='mm/dd/yyyy' style = {styles.dateInput} />
        <TextInput placeholder='What did you qualify for?' style = {styles.qualificationInput}/>
        <TextInput placeholder='Where did you get qualification?' style = {styles.instituationInput}/>
        <TextInput placeholder='mm/dd/yyyy' style = {styles.graduationInput}/>
        <TextInput placeholder='mm/dd/yyyy' style = {styles.graduationInput}/>
        <TextInput placeholder='qualification' style = {styles.input}/>
        <TextInput placeholder='qualification' style = {styles.input}/>
        <TextInput placeholder='institution' style = {styles.institution}/>
        <TextInput placeholder='institution' style = {styles.institution}/>
        <TextInput placeholder='year' style = {styles.yearOfAdmittance}/>
        <TextInput placeholder='name of membership' style = {styles.profMembership}/>
        <TextInput placeholder='year' style = {styles.yearOfAdmittance2}/>
        <TextInput placeholder='name of membership' style = {styles.profMembership2}/>
        <TextInput placeholder='year' style = {styles.yearOfAdmittance2}/>
        <TextInput placeholder='name of membership' style = {styles.profMembership2}/>
        <TextInput placeholder='year' style = {{bottom: 319,     left: 50,}}/>
        <TextInput placeholder='name of membership' style = {{bottom: 336, left: 150}}/>
        <TextInput placeholder='Any soft skills or previous skills you can apply at the job' style = {{bottom: 289, left: 28}}/>


    </ScrollView>

    <View style ={{position: 'absolute', right: 70, top: 400}}>
            {showComponent && <Artificial onPress={()=>navigation.navigate('Chat')}/>}
        </View>

    </View>

  )
}

export default TemplateThree

const styles = StyleSheet.create({
container:{
    height: '100%',
    backgroundColor: 'white'
},
header:{
    width: 430, 
    height: 66,
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
    left: 44,
    width: 345, 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700',
    wordWrap: 'break-word'
},
titleText:{
    top: 28,
    left: 24,
    width: 380, 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 20, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
image:{
    top: 35,
    width: '100%',
    height: 652 
},
nameInput:{
    position: 'absolute',
    top: 160,
    left: 50
},
addressInput:{
    position: 'absolute',
    fontSize: 10,
    top: 193.7,
    left: 80 
},
contactInput:{
    position: 'absolute',
    fontSize: 10,
    top: 209,
    left: 110 
},
emailInput:{
    position: 'absolute',
    fontSize: 10,
    top: 224,
    left: 70  
},
dateInput:{
    position: 'absolute',
    fontSize: 10,
    top: 275,
    left: 30,  
},
qualificationInput:{
    position: 'absolute',
    fontSize: 10,
    top: 275,
    left: 100  
},
instituationInput:{
    position: 'absolute',
    fontSize: 10,
    top: 275,
    left: 235 
},
doneButton:{

    justifyContent: 'center',
    width: 88, 
    height: 31, 
    backgroundColor: '#A9C5EE', 
    borderRadius: 24.50
},
doneButtonText:{
    width: 57, 
    height: 25.71, 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '600', 
    lineHeight: 30, 
    wordWrap: 'break-word',
    bottom: 3,
    left: 15.5
},
graduationInput:{
    bottom: 273,
    fontSize: 10,
    left: 40,
    marginBottom: 2,
},
input:{
    bottom: 301,
    fontSize: 10,
    left: 160,
    marginBottom: 2,
},
institution:{
    bottom: 328,
    fontSize: 10,
    left: 280,
    marginBottom: 2,
},
yearOfAdmittance:{
    bottom: 282,
    left: 50,
},
profMembership:{
    bottom: 298,
    left: 150,
},
yearOfAdmittance2:{
    bottom: 270,
    left: 50,
},
profMembership2:{
    bottom: 286,
    left: 150,
}
})