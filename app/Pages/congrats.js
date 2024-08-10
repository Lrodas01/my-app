import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Congrats = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}>Completed!!!!</Text>
        </View>
        <Image style = {styles.image} source ={require('../../assets/images/carbon.png')}/>
        <Text style ={styles.congrats}>Congratulations!</Text>
        <Text style={styles.congratsDescription}>You now can begin your greatest choice of your life</Text>
        <View style={[styles.footer, styles.shadowProp]}>
            <Pressable style={styles.buttonNext} onPress={()=>navigation.navigate('Home')}>
                <Text style = {styles.buttonText}>Next</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Congrats

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
        color: 'white', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        wordWrap: 'break-word'
    },
    image:{
        top: 164,
        left: 115
    },
    congrats:{
        top: 190,
        left: 91,
        color: 'black', 
        fontSize: 32, 
        fontFamily: 'Nunito', 
        fontWeight: '700',
        lineHeight: 35, 
        wordWrap: 'break-word'
    },
    congratsDescription:{
        top: 220,
        left: 44,
        width: 342, 
        height: 93, 
        textAlign: 'center',
        color: 'black', 
        fontSize: 32, 
        fontFamily: 'Nunito', 
        fontWeight: '400', 
        lineHeight: 30, 
        wordWrap: 'break-word'
    },
    footer:{
        top: 340,
        width: 430, 
        height: 129,
        paddingTop: 16, 
        paddingBottom: 48, 
        paddingLeft: 24, 
        paddingRight: 24, 
        backgroundColor: 'white', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start', gap: 10,
        display: 'inline-flex'
    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: { height: -12 },
        shadowOpacity: 0.16,
        shadowRadius: 16, 
    },
    buttonNext:{
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
    }

})