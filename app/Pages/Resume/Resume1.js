import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const Resume1 = ({navigation}) => {
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
    <View style = {{height: 20,}}>

    </View>
<ScrollView contentContainerStyle = {{paddingBottom: 200,}}>

    <View>
        <Text style = {styles.title}>1. Choose a format</Text>
    </View>
    <View>
        <Text style = {{position: 'absolute', fontSize: 50, top: 30, left: 15,}}>{`\u2022`}</Text><Text style = {styles.description}>Chronological: Lists your work history in reverse chronological order. Good for those with a steady work history.</Text>
    </View>


    <View style = {{top: 80, left: 2,}}>

      <ImageBackground source = {require('../../../assets/images/arrow.png')}>  
        <View>
            <Text style = {{position: 'absolute', bottom: 70, width: 90, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Nunito', fontWeight: '700', lineHeight: 15, wordWrap: 'break-word'}}>mcdonalds worker</Text>
            <Text style = {{width: 85, bottom: 40, left: 122, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Nunito', fontWeight: '700', lineHeight: 15, wordWrap: 'break-word'}}>went to Urban TXT</Text>
            <Text style = {{width: 85, bottom: 70, left: 258, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Nunito', fontWeight: '700', lineHeight: 15, wordWrap: 'break-word'}}>Worked at google</Text>
        </View>
            <Text style = {{position: 'absolute', top: 70, left: 40, width: 85, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Nunito', fontWeight: '700', lineHeight: 15, wordWrap: 'break-word'}}>gamestop worker</Text>
            <Text style = {{position: 'absolute', top: 70, left: 190, width: 85, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Nunito', fontWeight: '700', lineHeight: 15, wordWrap: 'break-word'}}>went to Riot Games</Text>
            <Text style = {{position: 'absolute', top: 70, left: 335, width: 95, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Nunito', fontWeight: '700', lineHeight: 15, wordWrap: 'break-word'}}>CEO of Alphabet Inc.</Text>
      </ImageBackground>

    </View>
    <View style = {{top: 150,}}>
    <Text style = {{position: 'absolute', fontSize: 50, bottom: 135, left: 15,}}>{`\u2022`}</Text>
        <Text style = {styles.functional} >Functional: Focuses on your skills and experience rather than chronological work history. Ideal for those with gaps in employment or changing careers.</Text>
    </View>
    <Image style = {{top: 160, left: 10,}} source={require('../../../assets/images/secondArrow.png')}/>
    <View style = {{width: 372, height: 10,}}>

    </View>
    <View>
    <Text style = {{position: 'absolute', fontSize: 50, top: 155, left: 15,}}>{`\u2022`}</Text>
    <Text style = {styles.combination}>Combination: Blends chronological and functional formats. Highlights skills and relevant experience.</Text>
    </View>
    <View>
        <Text style = {styles.mcDonalds}>mcdonalds worker</Text>
        <Text style = {styles.ceo}>ceo of google</Text>
    </View>
        <View>
            <Image style = {{top: 150, left: 67}} source = {require('../../../assets/images/cross.png')}/>
            <Image style = {{top: 100, left: 307}} source = {require('../../../assets/images/checkmark.png')}/>
        </View>


    </ScrollView>

    <View style = {[styles.footer, styles.shadowUp]}>
    <Pressable onPress = {() => navigation.navigate('Resume2')} style = {styles.buttonFooter}>
      <Text style = {styles.buttonText}>Next</Text>
      </Pressable>
    </View>
</View>        
  )
}

export default Resume1

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
      title:{
        top: 14,
        left: 24,
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      },
      description:{
        top: 46,
        left: 50,
        width: 360, 
        height: 137, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'wrap'
      },
      functional:{
        left: 50,
        width: 360, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      },
      combination:{
        top: 167,
        left: 50,
        width: 390, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      },
      mcDonalds:{
        top: 193,
        left: 35,
        width: 128, 
        textAlign: 'center', 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      },
      ceo:{
        top: 133,
        left: 289,
        width: 89, 
        textAlign: 'center', 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      },
})